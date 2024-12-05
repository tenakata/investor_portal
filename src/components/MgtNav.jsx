import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ApiRequest from './ApiRequest';
import API_BASE_URL from '../config/axiosConfig';
const Navbar = () => {
  const { getuserId, setUserId } = ApiRequest();
  const [userName, setUserName] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [small, setSmall] = useState(window.innerWidth <= 768);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = getuserId();
    if (userId) {
      setId(userId);
    } else {
      navigate('/');
    }
  }, [getuserId, navigate]);

  useEffect(() => {
    if (id) {
      axios.get(`${API_BASE_URL}/api/user/${id}`)
        .then(response => {
          setUserRole(response.data.role);
          setUserName(response.data.username);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setSmall(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logout = () => {
    setUserId(null);
    navigate('/');
  };

  return (
    <div>
      {small ? (
        <div className='flex items-center justify-center mb-8'>
          <span className='profile-sm'>
            <i className='bx bx-user text-2xl absolute top-6 right-4' ></i>
          </span>
        </div>
      ) : (
        <div className="flex justify-between items-center px-1 w-full mb-5">
          <span className="text-2xl font-bold">Investor Management</span>

          <span className="flex gap-2">
            <span className="text-3xl mt-1 flex gap-5 items-center">
              <div className='w-8 h-lineheight bg-black opacity-70'></div>
              <i className="bx bx-bell"></i>
            </span>
            <span className="flex flex-row items-center">
              <div>
                <h1>{userName || "Loading..."}</h1>
                <h2 className="text-xs">{userRole || "Loading..."}</h2>
              </div>
              <div className="w-7 h-7 rounded-lg bg-gray-500 ml-2 profile"></div>
              <div className='menu bg-white p-4 absolute top-14 right-8'>
                <h1>Settings</h1>
                <h1>Edit Profile</h1>
                <button onClick={logout}>Log Out</button>
              </div>
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
