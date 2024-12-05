import React, { useState, useRef } from 'react';
import promo from '../assets/promo.jpg';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import ApiRequest from './ApiRequest';

const Login = () => {
  const { http, setUserId } = ApiRequest();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userError, setUserError] = useState("");
  const navigate = useNavigate();
  const formRef = useRef(null);

  const formSubmit = async (e) => {
    e.preventDefault();

    if (!userName) {
      Swal.fire({
        icon: 'error',
        title: 'Username Required',
        text: 'Username is required',
      });
      return;
    }
    if (!password) {
      Swal.fire({
        icon: 'error',
        title: 'Password Required',
        text: 'Password is required',
      });
      return;
    }
    setErrorUserName("");
    setErrorPassword("");
    setErrorMsg("");
    setUserError("");

    const formData = new FormData();
    formData.append('username', userName);
    formData.append('password', password);

    const submitButton = document.getElementById("formSubmit");

    try {
      submitButton.setAttribute('disabled', '');
      submitButton.textContent = "Processing...";
      const res = await http.post('/login', formData);
      if (res.data.data === 200) {
        setUserId(res.data.user_id);
        formRef.current.reset();
        if (res.data.role === "admin") {
          navigate('/dashboard');
        } else {
          navigate('/investor');
        }
      } else if (res.data.data === 404) {
        Swal.fire({
          icon: 'error',
          title: 'Request Failed',
          text: 'You cannot login due to Inactive Status.Please Contact to Admin',
        });
      } else if (res.data.data === 300) {
        Swal.fire({
          icon: 'error',
          title: 'Request Failed',
          text: 'Credentials Not Matched wihtin our records',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Request Failed',
          text: 'An error occurred while login. Please try again.',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'An error occurred. Please try again.',
      });
    } finally {
      submitButton.removeAttribute('disabled');
      submitButton.textContent = "LOGIN";
    }
  };
  return (
    <div className='flex flex-col lg:flex-row w-full lg:w-customWidth h-full lg:h-customHeight border-mainbg border-8 rounded-2xl'>
      <span className='w-full h-full lg:w-1/2 bg-white rounded-l-2xl lg:rounded-l-2xl px-9 py-12'>
        <div className='flex justify-between mb-16'>
          <span className='h-logoHeight w-logoWidth cursor-pointer' onClick={() => navigate('/')}>
            <img src={logo} alt='logo' />
          </span>
          <span className='font-extrabold text-xl'>LOGIN</span>
        </div>
        <h1 className='mb-8 font-bold text-lg'>Welcome back, Sebie</h1>
        {errorMsg && (
          <div className="alert alert-danger text-center" role="alert">
            <strong>{errorMsg}</strong>
          </div>
        )}
        {userError && (
          <div className="alert alert-danger text-center" role="alert">
            <strong>{userError}</strong>
          </div>
        )}
        <form onSubmit={formSubmit} ref={formRef} autoComplete="off">
          <div className='input-container mb-4'>
            <label htmlFor='userName'>Username</label>
            <input
              type='text'
              name="userName"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className='w-full p-2 border rounded'
            />
            {errorUserName && <span className="text-danger fw-bold">{errorUserName}</span>}
          </div>

          <div className='input-container mb-4'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border rounded'
            />
            {errorPassword && <span className="text-danger fw-bold">{errorPassword}</span>}
          </div>

          <div className='flex lg:flex-row justify-between mb-5 flex-row'>
            <span className='mb-2 lg:mb-0'>
              <input type='checkbox' /> Keep me logged in
            </span>
            <span className='cursor-pointer' onClick={() => navigate('/forgot-password')}>Forgot Password</span>
          </div>
          <button type='submit' className='bg-buttonBlue rounded-xl text-white font-bold w-full h-inputHeight'>
            <span id="formSubmit">LOGIN</span>
          </button>
        </form>
      </span>
      <span className='w-1/2'>
        <img src={promo} alt='promo-image' className='lg:object-cover lg:h-full lg:w-full lg:rounded-r-2xl w-0 h-0' />
      </span>
    </div>
  );
}

export default Login;
