import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MgtNav from '../components/MgtNav';
import SidenavInves from '../components/SidenavInves';
import ApiRequest from '../components/ApiRequest';
import API_BASE_URL from '../config/axiosConfig';

const InvestorMgt = () => {
  const [users, setUsers] = useState([]);
  const { userId } = ApiRequest();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/get_investor/${userId}`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);
  return (
    <div className='flex bg-buttonBlue min-w-screen'>
      <span className='lg:w-sidenavW w-0'>
        <SidenavInves />
      </span>
      <span className='flex flex-col bg-dashbg lg:rounded-l-2xl lg:w-contentW p-7 w-full mb-5'>
        <MgtNav />
        <div className='flex justify-between mb-5 pr-5'>
          <span className='flex gap-2'>
            <button className='bg-white border border-gray-500 px-5 py-2 rounded-lg flex items-center gap-2'>
              Date range <i className='bx bx-calendar-alt'></i>
            </button>
            <button className='bg-white border border-gray-500 px-5 py-2 rounded-lg flex items-center gap-2'>
              Export data <i className='bx bx-upload'></i>
            </button>
          </span>
        </div>
        <div className='pr-5'>
          <table className='bg-white rounded-xl w-full'>
            <thead>
              <tr>
                <th className='t-h'>Investor ID</th>
                <th className='t-h'>Investor name</th>
                <th className='t-h'>Email address</th>
                <th className='t-h'>Phone Number</th>
                <th className='t-h'>Type</th>
                <th className='t-h'>Status</th>
                <th className='t-h'>Photo</th>
                <th className='t-h'>Identification</th>
                <th className='t-h'>Certificate</th>
                <th className='t-h'>Memorandum</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className='t-d'>{index + 1}</td>
                  <td className='t-d'>{user.investor_type == "individual" ? user.fullName : user.signatoryName}</td>
                  <td className='t-d'>{user.investor_type == "individual" ? user.amailingAddress : user.mailingAddress}</td>
                  <td className='t-d'>{user.investor_type == "individual" ? user.contact : user.phoneNumber}</td>
                  <td className='t-d'>{user.investor_type}</td>
                  <td className='t-d'>
                    {user.status == 1 ? 'Active' : 'Inactive'}
                  </td>
                  <td className='t-d'>
                    <img
                      src={user.photo || API_BASE_URL + "/images/no_image.jpg"}
                      alt="User Photo"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className='t-d'>
                    <img
                      src={user.demail || API_BASE_URL + "/images/no_image.jpg"}
                      alt="User Photo"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className='t-d'>
                    <img
                      src={user.iemail || API_BASE_URL + "/images/no_image.jpg"}
                      alt="User Photo"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className='t-d'>
                    <img
                      src={user.aemail || API_BASE_URL + "/images/no_image.jpg"}
                      alt="User Photo"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </span>
    </div>
  );
};

export default InvestorMgt;
