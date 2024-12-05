import React from 'react';
import Sidenav from './Sidenav';
import MgtNav from './MgtNav';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const AddressDets = ({ corporate, setCorporate, formData, updateFormData }) => {
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData('addressDetails', { [name]: value });
  };
  const nextNavigation = () => {
    const addressDetails = formData.addressDetails || {};
    if (corporate == false) {
      if (!('amailingAddress' in addressDetails) || addressDetails['amailingAddress'] === "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Mailing Address is missing!',
        });
        return false;
      }
      navigate('/details/Documents');
    } else if (corporate == true) {
      if (!('signatoryName' in addressDetails) || addressDetails['signatoryName'] === "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Signatory Name is missing!',
        });
        return false;
      }
      navigate('/details/Documents');
    }
  };
  return (
    <div className='flex bg-buttonBlue min-w-screen'>
      <span className='lg:w-sidenavW w-0'>
        <Sidenav />
      </span>
      <span className='flex flex-col bg-dashbg lg:rounded-l-2xl lg:w-contentW p-7 w-full'>
        <MgtNav />
        <div className='bg-white rounded-xl p-7'>
          <div className='flex items-center gap-3'>
            <h1 className='mb-3 lg:mb-2 font-semibold text-xl'>Onboard Investors</h1>
            <div className='flex items-center gap-2'>
              <label className='flex items-center'>
                <input
                  type='radio'
                  name='investorType'
                  value='individual'
                  className='mr-1'
                  checked={!corporate}
                  onClick={() => setCorporate(false)}
                />
                Individual
              </label>
              <label className='flex items-center'>
                <input
                  type='radio'
                  name='investorType'
                  value='corporate'
                  className='mr-1'
                  checked={corporate}
                  onClick={() => setCorporate(true)}
                />
                Corporate
              </label>
            </div>
          </div>
          <h2 className='lg:mb-4 mb-6 lg:opacity-55'>Add new investor</h2>
          <div className='page-indicator mb-14 flex justify-between'>
            <span className='flex items-center gap-2 text-buttonBlue'>
              <div className='w-7 h-7 rounded-full bg-buttonBlue flex items-center justify-center text-white'>
                1
              </div>
              Investor details
              <div className='w-24 h-lineheight bg-buttonBlue opacity-70'></div>
            </span>
            <span className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-buttonBlue flex items-center justify-center text-white'>
                2
              </div>
              Business details
              <div className='w-24 h-lineheight bg-buttonBlue opacity-70'></div>
            </span>
            <span className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-buttonBlue flex items-center justify-center text-white'>
                3
              </div>
              {corporate ? 'Signatory details' : 'Address details'}
              <div className='w-24 h-lineheight bg-buttonBlue opacity-70'></div>
            </span>
            <span className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'>
                4
              </div>
              documents
              <div className='w-24 h-lineheight bg-black opacity-70'></div>
            </span>
            <span>
              <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'></div>
            </span>
          </div>

          <form className='lg:grid lg:grid-cols-2 lg:gap-5'>
            {corporate ? (
              <>
                <div className='input-container'>
                  <label htmlFor='signatoryName'>Signatory Name</label>
                  <input type='text' id='signatoryName' name='signatoryName' value={formData.signatoryName}
                    onChange={handleInputChange} placeholder='Enter Signatory Name' />
                </div>
                <div className='input-container'>
                  <label htmlFor='position'>Position</label>
                  <input type='text' id='position' name='position' value={formData.position}
                    onChange={handleInputChange} placeholder='Enter Position' />
                </div>
              </>
            ) : (
              <>
                <div className='input-container'>
                  <label htmlFor='address'>Physical address</label>
                  <input type='text' id='address' name='address' value={formData.address}
                    onChange={handleInputChange} placeholder='Enter Physical Address' />
                </div>
                <div className='input-container'>
                  <label htmlFor='amailingAddress'>Mailing address</label>
                  <input type='text' id='amailingAddress' name='amailingAddress' value={formData.amailingAddress}
                    onChange={handleInputChange} placeholder='Enter Mailing Address' />
                </div>
                <div className='input-container'>
                  <label htmlFor='contact'>Contact</label>
                  <input type='text' id='contact' name='contact' value={formData.contact}
                    onChange={handleInputChange} placeholder='Enter Contact' />
                </div>
                <div className='input-container'>
                  <label htmlFor='email'>Email address</label>
                  <input type='email' id='email' name='email' value={formData.email}
                    onChange={handleInputChange} placeholder='Enter Email Address' />
                </div>
              </>
            )}
          </form>
          <div className='flex gap-2 justify-end'>
            <button
              className='text-buttonBlue px-7 py-2 rounded border border-buttonBlue'
              onClick={() => navigate('/details/Business')}
            >
              Back
            </button>
            <button
              className='text-white bg-buttonBlue px-7 py-2 rounded'
              onClick={nextNavigation}
            >
              Next
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default AddressDets;
