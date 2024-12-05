import React, { useState } from 'react';
import Sidenav from './Sidenav';
import MgtNav from './MgtNav';
import { useNavigate } from 'react-router-dom';

const BusinessDets = ({ corporate, setCorporate, formData, updateFormData }) => {
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      updateFormData('businessDetails', { [name]: file });
    } else {
      updateFormData('businessDetails', { [name]: value });
    }
  };

  return (
    <div className='flex bg-buttonBlue min-w-screen' >
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
                  onClick={() => setCorporate(false)}
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
              <div className='w-24 h-lineheight bg-buttonBlue opacity-70' ></div>
            </span>
            <span className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-buttonBlue flex items-center justify-center text-white'>
                2
              </div>
              Business details
              <div className='w-24 h-lineheight bg-buttonBlue opacity-70'></div>
            </span>
            <span className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'>
                3
              </div>
              Address details
              <div className='w-24 h-lineheight bg-black opacity-70'></div>
            </span>
            <span className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'>
                4
              </div>
              documents
              <div className='w-24 h-lineheight bg-black opacity-70'></div>
            </span>
            <span>
              <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'>
              </div>
            </span>
          </div>

          <form className='lg:grid lg:grid-cols-2 lg:gap-5'>
            <div className="input-container">
              <label for="email">{corporate ? "Nature of business" : "Occupation and employer details"}</label>
              <input type="email" id="email" name="obemail" value={formData.obemail} placeholder={corporate ? "Enter Nature of business" : "Enter Occupation and employer details"}
                onChange={handleInputChange} />
            </div>
            <div className="input-container">
              <label for="email">source of funds</label>
              <select id="email" name="semail" value={formData.semail}
                onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" style={{ border: 'none', outline: 'none' }}>
                <option value="" selected disabled>--Select Source of funds--</option>
                <option value="salary_wages">Salary/Wages</option>
                <option value="business_income">Business Income</option>
                <option value="investments">Investments (Stocks, Bonds, Dividends)</option>
                <option value="savings">Savings</option>
                <option value="pension_retirement_funds">Pension/Retirement Funds</option>
                <option value="rental_income">Rental Income</option>
                <option value="inheritance">Inheritance</option>
                <option value="gifts_donations">Gifts/Donations</option>
                <option value="sale_of_assets">Sale of Assets (Property, Vehicles, etc.)</option>
                <option value="loan_proceeds">Loan Proceeds</option>
                <option value="government_benefits_grants">Government Benefits/Grants</option>
                <option value="freelance_consulting_income">Freelance/Consulting Income</option>
                <option value="dividends_from_cooperative_societies">Dividends from Cooperative Societies</option>
                <option value="crowdfunding_proceeds">Crowdfunding Proceeds</option>
                <option value="insurance_payouts">Insurance Payouts</option>
                <option value="lottery_prize_winnings">Lottery/Prize Winnings</option>
                <option value="agricultural_income">Agricultural Income</option>
                <option value="commission_income">Commission Income</option>
                <option value="alimony_child_support">Alimony/Child Support</option>
                <option value="trust_fund_distribution">Trust Fund Distribution</option>
                <option value="venture_capital_private_equity">Venture Capital/Private Equity</option>
                <option value="partnership_distributions">Partnership Distributions</option>
                <option value="remittances">Remittances</option>
                <option value="crypto_currency_transactions">Crypto-currency Transactions</option>
                <option value="contractual_payments">Contractual Payments</option>
                <option value="scholarships_bursaries">Scholarships/Bursaries</option>
                <option value="self_employment_income">Self-employment Income</option>
                <option value="export_import_trade">Export/Import Trade</option>
                <option value="charitable_donations">Charitable Donations</option>
                <option value="other">Other (Please Specify)</option>
              </select>
              {/* <input type="email" id="email" name="semail" value={formData.semail}
                onChange={handleInputChange} /> */}
            </div>
            <div className="input-container">
              <label htmlFor="photo">Photo</label>
              <input
                type="file"
                id="photo"
                name="photo"
                value={formData.documentsDetails?.photo}
                onChange={handleInputChange} style={{ padding: '2px' }}
              />
            </div>
          </form>
          <div className='flex gap-2 justify-end'>
            <button className='text-buttonBlue px-7 py-2 rounded border border-buttonBlue'
              onClick={() => navigate("/details/investorDets")}
            >Back</button>
            <button className='text-white bg-buttonBlue px-7 py-2 rounded'
              onClick={() => navigate("/details/address")}
            >Next</button>
          </div>
        </div>
      </span>
    </div>
  )
}

export default BusinessDets