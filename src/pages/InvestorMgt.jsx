import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MgtNav from '../components/MgtNav';
import Sidenav from '../components/Sidenav';
import { useNavigate } from 'react-router-dom';
import DelSuccess from '../components/DelSuccess';
import API_BASE_URL from '../config/axiosConfig';
const InvestorMgt = () => {
  const [users, setUsers] = useState([]);
  const [deluser, setDeluser] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [loadingUserId, setLoadingUserId] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(API_BASE_URL + "/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  const navigate = useNavigate();

  const deleteInvestor = async (userId) => {
    setUserIdToDelete(userId);
    setDeluser(true);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/delete-user/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.log(error);
    }
  };

  const toggleStatus = async (userId, currentStatus) => {
    const newStatus = currentStatus === 1 ? 0 : 1;
    setLoadingUserId(userId);

    try {
      await axios.post(`${API_BASE_URL}/api/status-change/${userId}`, { status: newStatus });
      setUsers(users.map(user =>
        user.id === userId ? { ...user, status: newStatus } : user
      ));
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingUserId(null);
    }
  };

  return (
    <div className='flex bg-buttonBlue min-w-screen'>
      {deluser && <DelSuccess setDeluser={setDeluser} userId={userIdToDelete} onDelete={handleDelete} />}
      <span className='lg:w-sidenavW w-0'>
        <Sidenav />
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
          <button
            className='bg-statusColor px-6 py-2 rounded-lg text-white'
            onClick={() => navigate("/details/investorDets")}
          >
            Add investor
          </button>
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
                <th className='t-h'>Action</th>
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
                  <td className='t-d'>
                    {loadingUserId === user.id ? (
                      <i className='bx bx-loader bx-spin cursor-pointer'></i>
                    ) : (
                      <i
                        className={`bx ${user.status == 1 ? 'bxs-hide' : 'bxs-show'} cursor-pointer`}
                        onClick={() => toggleStatus(user.id, user.status)}
                      ></i>
                    )}
                    <i className='bx bxs-trash cursor-pointer' onClick={() => deleteInvestor(user.id)}></i>
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
