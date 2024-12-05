import React, { useState, useRef } from 'react';
import promo from '../assets/promo.jpg';
import logo from '../assets/logo.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import ApiRequest from './ApiRequest';

const Login = () => {
    const { http, setUserId } = ApiRequest();
    const { email } = useParams();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const formRef = useRef(null);

    const formSubmit = async (e) => {
        e.preventDefault();

        if (!password) {
            Swal.fire({
                icon: 'error',
                title: 'Password Required',
                text: 'Password is required',
            });
            return;
        }
        if (!confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Confirm Password Required',
                text: 'Confirm password is required',
            });
            return;
        }
        if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Passwords Mismatch',
                text: 'Passwords do not match',
            });
            return;
        }

        setErrorPassword("");
        setErrorConfirmPassword("");
        setErrorMsg("");

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('confirm_password', confirmPassword);

        const submitButton = document.getElementById("formSubmit");

        try {
            submitButton.setAttribute('disabled', '');
            submitButton.textContent = "Processing...";
            const res = await http.post('/update-password', formData);
            if (res.data.data === 200) {
                setUserId(res.data.user_id);
                formRef.current.reset();
                if (res.data.role === "admin") {
                    navigate('/dashboard');
                } else {
                    navigate('/investor');
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'An error occurred while updating your password. Please try again.',
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred. Please try again.',
            });
        } finally {
            submitButton.removeAttribute('disabled');
            submitButton.textContent = "RESET PASSWORD";
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
                <div className='mb-8'>
                    <h1 className='font-bold text-lg'>Set new password</h1>
                    <h2>Please enter the new password according to instructions</h2>
                </div>

                <form onSubmit={formSubmit} ref={formRef}>
                    <div className="input-container">
                        <label htmlFor="password">New password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errorPassword && <p className="error-text">{errorPassword}</p>}
                    </div>

                    <div className="input-container">
                        <label htmlFor="confirm_password">Confirm password</label>
                        <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errorConfirmPassword && <p className="error-text">{errorConfirmPassword}</p>}
                    </div>

                    {errorMsg && <p className="error-text">{errorMsg}</p>}
                    <button
                        type="submit"
                        id="formSubmit"
                        className='bg-buttonBlue rounded-xl text-white font-bold w-full h-inputHeight'
                    >
                        RESET PASSWORD
                    </button>
                </form>
            </span>
            <span className='w-1/2'>
                <img src={promo} alt="promo-image" className='lg:object-cover lg:h-full lg:w-full lg:rounded-2xl w-0 h-0' />
            </span>
        </div>
    );
}

export default Login;
