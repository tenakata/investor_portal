import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/axiosConfig';
const ConfirmModal = ({ setShowModal, setSuccessful, formData, updateFormData, setFormData, corporate }) => {
    const [error, setError] = useState('');
    const {
        investorDetails = {},
        addressDetails = {},
        businessDetails = {},
        documentsDetails = {}
    } = formData || {};

    const handleConfirm = async () => {
        const formDataToSend = new FormData();
        Object.keys(investorDetails).forEach(key => {
            formDataToSend.append(`${key}`, investorDetails[key] || '');
        });
        Object.keys(addressDetails).forEach(key => {
            formDataToSend.append(`${key}`, addressDetails[key] || '');
        });
        Object.keys(businessDetails).forEach(key => {
            formDataToSend.append(`${key}`, businessDetails[key] || '');
        });
        Object.keys(documentsDetails).forEach(key => {
            formDataToSend.append(`${key}`, documentsDetails[key] || '');
        });
        formDataToSend.append("investor_type", corporate == true ? "corporate" : 'individual');
        const confirmButton = document.getElementById("confirmButton");

        try {
            confirmButton.setAttribute('disabled', '');
            confirmButton.textContent = "Processing...";
            const response = await axios.post(`${API_BASE_URL}/api/investor_add`, formDataToSend);
            if (response.status === 201) {
                updateFormData('investorDetails', {});
                updateFormData('addressDetails', {});
                updateFormData('businessDetails', {});
                updateFormData('documentsDetails', {});
                setSuccessful(true);
                setShowModal(false);
            } else {
                confirmButton.removeAttribute('disabled');
                confirmButton.textContent = "Confirm";
                console.error('Failed to submit form');
                setError('Failed to submit form. Please try again later.');
            }
        } catch (error) {
            confirmButton.removeAttribute('disabled');
            confirmButton.textContent = "Confirm";
            if (error.response && error.response.data) {
                setError(`Error: ${error.response.data.message || 'An error occurred'}`);
            } else {
                setError('Error submitting form: An unexpected error occurred.');
            }
        }
    };

    return (
        <div className='modal-overlay fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className="bg-white flex flex-col shadow-lg z-30 justify-center items-center w-1/3 p-7">
                <h1>Confirm Investor Details</h1>
                {error && (
                    <div className='bg-red-100 text-red-800 border border-red-400 rounded px-4 py-3 mb-4'>
                        {error}
                    </div>
                )}
                <div className='bg-tablebg w-full mb-2 flex justify-between items-start'>
                    <span className='flex flex-col gap-1 p-3'>
                        <h1 className='font-semibold mb-2'>Details</h1>
                        <h1 className='faded'>Full Name:</h1>
                        <h1 className='faded'>Date of Birth:</h1>
                        <h1 className='faded'>Nationality:</h1>
                        <h1 className='faded'>Identification Number:</h1>
                        <h1 className='faded'>Physical Address:</h1>
                        <h1 className='faded'>Mailing Address:</h1>
                        <h1 className='faded'>Contact Information:</h1>
                        <h1 className='faded'>Occupation & Employer Details:</h1>
                        <h1 className='faded'>Source of Funds:</h1>
                        <h1 className='faded'>Photographic Identification:</h1>
                    </span>
                    <span className='flex flex-col gap-1 p-3 items-end'>
                        <h1 className='mb-2 font-semibold text-tablebg'>Data</h1>
                        <h1 className='faded'>{investorDetails?.fullName || 'N/A'}</h1>
                        <h1 className='faded'>{investorDetails?.dob || 'N/A'}</h1>
                        <h1 className='faded'>{investorDetails?.nationality || 'N/A'}</h1>
                        <h1 className='faded'>{investorDetails?.idType || 'N/A'}</h1>
                        <h1 className='faded'>{addressDetails?.address || 'N/A'}</h1>
                        <h1 className='faded'>{investorDetails?.mailingAddress || 'N/A'}</h1>
                        <h1 className='faded'>{investorDetails?.phoneNumber || 'N/A'}</h1>
                        <h1 className='faded'>{businessDetails?.bemail || 'N/A'}</h1>
                        <h1 className='faded'>{businessDetails?.semail || 'N/A'}</h1>
                        <h1 className='faded'>{documentsDetails?.pemail || 'N/A'}</h1>
                    </span>
                </div>
                <div className='flex justify-end gap-2 w-full'>
                    <button className='border border-buttonBlue rounded-lg px-5 py-2 text-buttonBlue'
                        onClick={() => setShowModal(false)}
                    >Cancel</button>
                    <button id='confirmButton' className='bg-buttonBlue text-white rounded-lg px-5 py-2'
                        onClick={handleConfirm}
                    >Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
