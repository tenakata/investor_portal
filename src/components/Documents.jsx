import React, { useState } from 'react';
import Sidenav from './Sidenav';
import MgtNav from './MgtNav';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';
import SuccessfulModal from './SuccessfulModal';

const Documents = ({ corporate, setCorporate, formData, updateFormData }) => {
  const [showModal, setShowModal] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      const file = files[0];
      updateFormData('documentsDetails', { [name]: file });
    } else {
      updateFormData('documentsDetails', { [name]: value });
    }
  };

  return (
    <div className='flex bg-buttonBlue min-w-screen'>
      {showModal && (
        <ConfirmModal
          setShowModal={setShowModal}
          setSuccessful={setSuccessful}
          formData={formData}
          updateFormData={updateFormData}
          corporate={corporate}
          navigate={navigate}
        />
      )}
      {successful && <SuccessfulModal setSuccessful={setSuccessful} />}
      <span className='lg:w-sidenavW w-0'>
        <Sidenav />
      </span>
      <span className='flex flex-col bg-dashbg lg:rounded-l-2xl lg:w-contentW p-7 w-full'>
        <MgtNav />
        <div className='bg-white rounded-xl p-7'>
          <div className="flex items-center gap-3">
            <h1 className="mb-3 lg:mb-2 font-semibold text-xl">Onboard Investors</h1>
            <div className="flex items-center gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="investorType"
                  value="individual"
                  className="mr-1"
                  checked={!corporate}
                  onChange={() => setCorporate(false)}
                />
                Individual
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="investorType"
                  value="corporate"
                  className="mr-1"
                  checked={corporate}
                  onChange={() => setCorporate(true)}
                />
                Corporate
              </label>
            </div>
          </div>
          <h2 className='lg:mb-4 mb-6 lg:opacity-55'>Add new investor</h2>
          <div className='page-indicator mb-14 flex justify-between text-buttonBlue'>
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
              Address details
              <div className='w-24 h-lineheight bg-buttonBlue opacity-70'></div>
            </span>
            <span className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-buttonBlue flex items-center justify-center text-white'>
                4
              </div>
              Documents
              <div className='w-24 h-lineheight bg-buttonBlue opacity-70'></div>
            </span>
            <span>
              <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'></div>
            </span>
          </div>

          <form className='lg:grid lg:grid-cols-2 lg:gap-5'>
            {corporate ? (
              <>
                <div className="input-container">
                  <label htmlFor="demail">Attach Identification documents for authorized signatures</label>
                  <input
                    type="file"
                    id="demail"
                    name="demail"
                    onChange={handleInputChange}
                    style={{ padding: '2px' }}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="bemail">Proof of business address</label>
                  <input
                    type="email"
                    id="bemail"
                    name="bemail"
                    value={formData.documentsDetails?.bemail} placeholder='Enter Proof of Business'
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="iemail">Certificate of Incorporation</label>
                  <input
                    type="file"
                    id="iemail"
                    name="iemail"
                    onChange={handleInputChange} 
                    style={{ padding: '2px' }}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="aemail">Memorandum of Association</label>
                  <input
                    type="file"
                    id="aemail"
                    name="aemail"
                    onChange={handleInputChange}
                    style={{ padding: '2px' }}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="oemail">Ownership structure</label>
                  <select
                    id="oemail"
                    name="oemail"
                    value={formData.documentsDetails?.oemail}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    style={{ border: 'none', outline: 'none' }}
                  >
                    <option value="" disabled>--Select Ownership--</option>
                    <option value="sole_proprietorship">Sole Proprietorship</option>
                    <option value="partnership">Partnership</option>
                    <option value="llc">Limited Liability Company (LLC)</option>
                    <option value="corporation_inc">Corporation (Inc.)</option>
                    <option value="private_limited_company_ltd">Private Limited Company (Ltd.)</option>
                    <option value="public_limited_company_plc">Public Limited Company (PLC)</option>
                    <option value="cooperative_society">Cooperative Society</option>
                    <option value="joint_venture">Joint Venture</option>
                    <option value="trust">Trust</option>
                    <option value="franchise">Franchise</option>
                    <option value="non_profit_organization">Non-Profit Organization</option>
                    <option value="government_owned_entity">Government-Owned Entity</option>
                    <option value="partnership_limited_lp">Partnership - Limited (LP)</option>
                    <option value="partnership_limited_liability_llp">Partnership - Limited Liability (LLP)</option>
                    <option value="holding_company">Holding Company</option>
                    <option value="subsidiary">Subsidiary</option>
                    <option value="joint_stock_company">Joint Stock Company</option>
                    <option value="association">Association</option>
                    <option value="family_owned_business">Family-Owned Business</option>
                    <option value="public_sector_enterprise">Public Sector Enterprise</option>
                    <option value="mutual_fund">Mutual Fund</option>
                    <option value="s_corporation">S-Corporation</option>
                    <option value="c_corporation">C-Corporation</option>
                    <option value="social_enterprise">Social Enterprise</option>
                    <option value="self_employed">Self-Employed</option>
                    <option value="other">Other (Please Specify)</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div className="input-container">
                  <label htmlFor="pemail">Photographic Identification</label>
                  <input
                    type="email"
                    id="pemail"
                    name="pemail"
                    value={formData.documentsDetails?.pemail}
                    onChange={handleInputChange} placeholder='Enter Photographic Identification'
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="premail">Proof of address</label>
                  <input
                    type="email"
                    id="premail"
                    name="premail"
                    value={formData.documentsDetails?.premail} placeholder='Enter Proof of Address'
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
          </form>
          <div className='flex gap-2 justify-end'>
            <button
              className='text-buttonBlue px-7 py-2 rounded border border-buttonBlue'
              onClick={() => navigate("/details/address")}
            >
              Back
            </button>
            <button
              className='text-white bg-buttonBlue px-7 py-2 rounded'
              onClick={() => setShowModal(true)}
            >
              Submit
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Documents;
