import React, { useState, useRef } from 'react';
import promo from '../assets/promo.jpg';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import API_BASE_URL from '../config/axiosConfig';

const Login = () => {
    const [email, setEmail] = useState("");
    const [erroremail, setErroremail] = useState("");
    const navigate = useNavigate();
    const formRef = useRef(null);

    const formSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setErroremail("Email is required");
            return;
        }
        setErroremail("");

        const formData = new FormData();
        formData.append('email', email);

        const submitButton = document.getElementById("formSubmit");

        try {
            submitButton.setAttribute('disabled', '');
            submitButton.textContent = "Processing...";

            const res = await axios.post(API_BASE_URL + '/api/forget-password', formData);

            if (res.data.data === 200) {
                formRef.current.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Please check your email. We have sent the email.',
                });
            } else if (res.data.data === 404) {
                formRef.current.reset();
                Swal.fire({
                    icon: 'error',
                    title: 'Inactive Status',
                    text: 'Your status is inactive. You cannot log in. Please contact the admin.',
                });
            } else {
                formRef.current.reset();
                Swal.fire({
                    icon: 'warning',
                    title: 'Invalid Email',
                    text: 'Please enter a valid email.',
                });
            }
        } catch (error) {
            formRef.current.reset();
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred. Please try again.',
            });
        } finally {
            formRef.current.reset();
            submitButton.removeAttribute('disabled');
            submitButton.textContent = "SUBMIT";
        }
    };


    return (
        <div className='flex flex-col lg:flex-row w-full lg:w-customWidth h-full lg:h-customHeight border-mainbg border-8 rounded-2xl'>
            <span className='w-full h-full lg:w-1/2 bg-white rounded-l-2xl lg:rounded-l-2xl px-9 py-12'>
                <div className='flex justify-between mb-16'>
                    <span className='h-logoHeight w-logoWidth cursor-pointer' onClick={() => navigate("/")}>
                        <img src={logo} alt="logo" />
                    </span>
                    <span className='font-extrabold text-xl'>
                        FORGOT PASSWORD
                    </span>
                </div>
                <div className='mb-6'>
                    <h1 className='font-bold text-lg'>Forgot password</h1>
                    <h2>Please enter the email shared during onboarding</h2>
                </div>

                <form onSubmit={formSubmit} ref={formRef} autoComplete="off">
                    <div className="input-container">
                        <label htmlFor="email">Enter email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {erroremail && <p className="error-message">{erroremail}</p>}
                    </div>

                    <button
                        className='w-full h-inputHeight bg-buttonBlue rounded-xl
                        cursor-pointer lg:mt-24
                        text-white font-semibold'
                        id="formSubmit"
                        type="submit"
                    >
                        SUBMIT
                    </button>
                </form>
            </span>
            <span className='w-1/2'>
                <img src={promo} alt="promo-image" className='w-0 h-0 lg:object-cover lg:h-full lg:w-full lg:rounded-2xl' />
            </span>
        </div>
    );
}

export default Login;
