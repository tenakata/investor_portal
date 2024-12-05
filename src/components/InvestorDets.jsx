import React, { useEffect } from 'react';
import Sidenav from '../components/Sidenav';
import MgtNav from '../components/MgtNav';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const InvestorDets = ({ corporate, setCorporate, formData, updateFormData }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!formData.investorDetails) {
      updateFormData('investorDetails', {});
    }
  }, [formData.investorDetails, updateFormData]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData('investorDetails', { [name]: value });
  };
  const nextNavigation = () => {
    const investorDetails = formData.investorDetails || {};
    if (corporate == false) {
      if (!('fullName' in investorDetails) || investorDetails['fullName'] === "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Full Name is missing!',
        });
        return false;
      }
      navigate('/details/Business');
    } else if (corporate == true) {
      if (!('mailingAddress' in investorDetails) || investorDetails['mailingAddress'] === "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Mailing Address is missing!',
        });
        return false;
      }
      navigate('/details/Business');
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
              <div className='w-24 h-lineheight bg-buttonBlue opacity-70' ></div>
            </span>
            <span className='flex items-center gap-2'>
              <div className='w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white'>
                2
              </div>
              Business details
              <div className='w-24 h-lineheight bg-gray-500 opacity-70'></div>
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
            {corporate ? (
              <>
                <div className="input-container mb-4">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded" placeholder='Enter Company Name'
                  />
                </div>
                <div className="input-container mb-4">
                  <label htmlFor="registrationNumber">Business Registration Number</label>
                  <input
                    type="text"
                    id="registrationNumber"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded" placeholder='Enter Business Registeration No'
                  />
                </div>
                <div className="input-container mb-4">
                  <label htmlFor="countryOfIncorporation">Country of Incorporation</label>
                  <select id="countryOfIncorporation"
                    name="countryOfIncorporation"
                    value={formData.countryOfIncorporation}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded" style={{ border: 'none', outline: 'none' }}>
                    <option value="" selected disabled>--Select Country of Incorporation--</option>
                    <option value="kenya">Kenya</option>
                    <option value="uganda">Uganda</option>
                    <option value="tanzania">Tanzania</option>
                    <option value="rwanda">Rwanda</option>
                    <option value="burundi">Burundi</option>
                    <option value="south_sudan">South Sudan</option>
                    <option value="ethiopia">Ethiopia</option>
                    <option value="somalia">Somalia</option>
                    <option value="eritrea">Eritrea</option>
                    <option value="djibouti">Djibouti</option>
                    <option value="sudan">Sudan</option>
                    <option value="egypt">Egypt</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                    <option value="south_africa">South Africa</option>
                    <option value="zimbabwe">Zimbabwe</option>
                    <option value="zambia">Zambia</option>
                    <option value="malawi">Malawi</option>
                    <option value="mozambique">Mozambique</option>
                    <option value="botswana">Botswana</option>
                    <option value="namibia">Namibia</option>
                    <option value="angola">Angola</option>
                    <option value="democratic_republic_of_the_congo_drc">Democratic Republic of the Congo (DRC)</option>
                    <option value="republic_of_the_congo">Republic of the Congo</option>
                    <option value="gabon">Gabon</option>
                    <option value="equatorial_guinea">Equatorial Guinea</option>
                    <option value="cameroon">Cameroon</option>
                    <option value="chad">Chad</option>
                    <option value="central_african_republic_car">Central African Republic (CAR)</option>
                    <option value="niger">Niger</option>
                    <option value="mali">Mali</option>
                    <option value="burkina_faso">Burkina Faso</option>
                    <option value="senegal">Senegal</option>
                    <option value="ivory_coast_cote_divoire">Ivory Coast (Côte d'Ivoire)</option>
                    <option value="liberia">Liberia</option>
                    <option value="sierra_leone">Sierra Leone</option>
                    <option value="guinea">Guinea</option>
                    <option value="guinea_bissau">Guinea-Bissau</option>
                    <option value="cape_verde">Cape Verde</option>
                    <option value="the_gambia">The Gambia</option>
                    <option value="mauritania">Mauritania</option>
                    <option value="morocco">Morocco</option>
                    <option value="algeria">Algeria</option>
                    <option value="tunisia">Tunisia</option>
                    <option value="libya">Libya</option>
                    <option value="madagascar">Madagascar</option>
                    <option value="mauritius">Mauritius</option>
                    <option value="seychelles">Seychelles</option>
                    <option value="comoros">Comoros</option>
                    <option value="lesotho">Lesotho</option>
                    <option value="eswatini_swaziland">Eswatini (Swaziland)</option>
                    <option value="benin">Benin</option>
                    <option value="togo">Togo</option>
                    <option value="sao_tome_and_principe">São Tomé and Príncipe</option>
                    <option value="sao_tome_and_principe">Sao Tome and Principe</option>
                    <option value="albania">Albania</option>
                    <option value="andorra">Andorra</option>
                    <option value="armenia">Armenia</option>
                    <option value="austria">Austria</option>
                    <option value="azerbaijan">Azerbaijan</option>
                    <option value="belarus">Belarus</option>
                    <option value="belgium">Belgium</option>
                    <option value="bosnia_and_herzegovina">Bosnia and Herzegovina</option>
                    <option value="bulgaria">Bulgaria</option>
                    <option value="croatia">Croatia</option>
                    <option value="cyprus">Cyprus</option>
                    <option value="czech_republic">Czech Republic</option>
                    <option value="denmark">Denmark</option>
                    <option value="estonia">Estonia</option>
                    <option value="finland">Finland</option>
                    <option value="france">France</option>
                    <option value="georgia">Georgia</option>
                    <option value="germany">Germany</option>
                    <option value="greece">Greece</option>
                    <option value="hungary">Hungary</option>
                    <option value="iceland">Iceland</option>
                    <option value="ireland">Ireland</option>
                    <option value="italy">Italy</option>
                    <option value="kazakhstan">Kazakhstan</option>
                    <option value="kosovo">Kosovo</option>
                    <option value="kyrgyzstan">Kyrgyzstan</option>
                    <option value="latvia">Latvia</option>
                    <option value="liechtenstein">Liechtenstein</option>
                    <option value="lithuania">Lithuania</option>
                    <option value="luxembourg">Luxembourg</option>
                    <option value="malta">Malta</option>
                    <option value="moldova">Moldova</option>
                    <option value="monaco">Monaco</option>
                    <option value="montenegro">Montenegro</option>
                    <option value="netherlands">Netherlands</option>
                    <option value="north_macedonia">North Macedonia</option>
                    <option value="norway">Norway</option>
                    <option value="poland">Poland</option>
                    <option value="portugal">Portugal</option>
                    <option value="romania">Romania</option>
                    <option value="russia">Russia</option>
                    <option value="san_marino">San Marino</option>
                    <option value="serbia">Serbia</option>
                    <option value="slovakia">Slovakia</option>
                    <option value="slovenia">Slovenia</option>
                    <option value="spain">Spain</option>
                    <option value="sweden">Sweden</option>
                    <option value="switzerland">Switzerland</option>
                    <option value="turkey">Turkey</option>
                    <option value="ukraine">Ukraine</option>
                    <option value="united_kingdom">United Kingdom</option>
                    <option value="vatican_city">Vatican City</option>
                    <option value="afghanistan">Afghanistan</option>
                    <option value="bahrain">Bahrain</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="bhutan">Bhutan</option>
                    <option value="brunei">Brunei</option>
                    <option value="cambodia">Cambodia</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="iran">Iran</option>
                    <option value="iraq">Iraq</option>
                    <option value="israel">Israel</option>
                    <option value="japan">Japan</option>
                    <option value="jordan">Jordan</option>
                    <option value="kyrgyzstan">Kyrgyzstan</option>
                    <option value="laos">Laos</option>
                    <option value="lebanon">Lebanon</option>
                    <option value="malaysia">Malaysia</option>
                    <option value="maldives">Maldives</option>
                    <option value="mongolia">Mongolia</option>
                    <option value="myanmar_burma">Myanmar (Burma)</option>
                    <option value="nepal">Nepal</option>
                    <option value="north_korea">North Korea</option>
                    <option value="oman">Oman</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="palestine">Palestine</option>
                    <option value="philippines">Philippines</option>
                    <option value="qatar">Qatar</option>
                    <option value="saudi_arabia">Saudi Arabia</option>
                    <option value="singapore">Singapore</option>
                    <option value="south_korea">South Korea</option>
                    <option value="sri_lanka">Sri Lanka</option>
                    <option value="syria">Syria</option>
                    <option value="tajikistan">Tajikistan</option>
                    <option value="thailand">Thailand</option>
                    <option value="timor_leste">Timor-Leste</option>
                    <option value="turkmenistan">Turkmenistan</option>
                    <option value="united_arab_emirates_uae">United Arab Emirates (UAE)</option>
                    <option value="uzbekistan">Uzbekistan</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="yemen">Yemen</option>
                    <option value="australia">Australia</option>
                    <option value="fiji">Fiji</option>
                    <option value="kiribati">Kiribati</option>
                    <option value="marshall_islands">Marshall Islands</option>
                    <option value="micronesia">Micronesia</option>
                    <option value="nauru">Nauru</option>
                    <option value="new_zealand">New Zealand</option>
                    <option value="palau">Palau</option>
                    <option value="papua_new_guinea">Papua New Guinea</option>
                    <option value="samoa">Samoa</option>
                    <option value="solomon_islands">Solomon Islands</option>
                    <option value="tonga">Tonga</option>
                    <option value="tuvalu">Tuvalu</option>
                    <option value="vanuatu">Vanuatu</option>
                    <option value="united_states_of_america_usa">United States of America (USA)</option>
                    <option value="canada">Canada</option>
                    <option value="mexico">Mexico</option>
                    <option value="belize">Belize</option>
                    <option value="costa_rica">Costa Rica</option>
                    <option value="el_salvador">El Salvador</option>
                    <option value="guatemala">Guatemala</option>
                    <option value="honduras">Honduras</option>
                    <option value="nicaragua">Nicaragua</option>
                    <option value="panama">Panama</option>
                    <option value="bahamas">Bahamas</option>
                    <option value="barbados">Barbados</option>
                    <option value="cuba">Cuba</option>
                    <option value="dominica">Dominica</option>
                    <option value="dominican_republic">Dominican Republic</option>
                    <option value="grenada">Grenada</option>
                    <option value="haiti">Haiti</option>
                    <option value="jamaica">Jamaica</option>
                    <option value="saint_kitts_and_nevis">Saint Kitts and Nevis</option>
                    <option value="saint_lucia">Saint Lucia</option>
                    <option value="saint_vincent_and_the_grenadines">Saint Vincent and the Grenadines</option>
                    <option value="trinidad_and_tobago">Trinidad and Tobago</option>
                    <option value="argentina">Argentina</option>
                    <option value="bolivia">Bolivia</option>
                    <option value="brazil">Brazil</option>
                    <option value="chile">Chile</option>
                    <option value="colombia">Colombia</option>
                    <option value="ecuador">Ecuador</option>
                    <option value="guyana">Guyana</option>
                    <option value="paraguay">Paraguay</option>
                    <option value="peru">Peru</option>
                    <option value="suriname">Suriname</option>
                    <option value="uruguay">Uruguay</option>
                    <option value="venezuela">Venezuela</option>
                  </select>
                  {/* <input
                    type="text"
                    id="countryOfIncorporation"
                    name="countryOfIncorporation"
                    value={formData.countryOfIncorporation}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  /> */}
                </div>
                <div className="input-container mb-4">
                  <label htmlFor="businessAddress">Business Address</label>
                  <input
                    type="text"
                    id="businessAddress"
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded" placeholder='Enter Business Address'
                  />
                </div>
                <div className="input-container mb-4">
                  <label htmlFor="mailingAddress">Mailing Address</label>
                  <input
                    type="email"
                    id="mailingAddress"
                    name="mailingAddress"
                    value={formData.mailingAddress}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded" placeholder='Enter Mailing Address'
                  />
                </div>
                <div className="input-container mb-4">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded" placeholder='Enter Phone No'
                  />
                </div>
              </>
            ) : (
              <>
                <div className="input-container mb-4">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName" required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded" placeholder='Enter Full Name'
                  />
                </div>
                <div className="input-container mb-4">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="input-container mb-4">
                  <label htmlFor="nationality">Nationality</label>
                  <select id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded b-0" style={{ border: 'none', outline: 'none' }}>
                    <option value="" selected disabled>--Select Nationality--</option>
                    <option value="national_id">National ID</option>
                    <option value="passport">Passport</option>
                    <option value="drivers_license">Driver's License</option>
                    <option value="voters_id">Voter's ID</option>
                    <option value="social_security_number_ssn">Social Security Number (SSN)</option>
                    <option value="alien_registration_card">Alien Registration Card</option>
                    <option value="birth_certificate">Birth Certificate</option>
                    <option value="tax_identification_number_tin">Tax Identification Number (TIN)</option>
                    <option value="work_permit">Work Permit</option>
                    <option value="residence_permit">Residence Permit</option>
                    <option value="military_id">Military ID</option>
                    <option value="student_id">Student ID</option>
                    <option value="employee_id">Employee ID</option>
                    <option value="health_insurance_card">Health Insurance Card</option>
                    <option value="nssf_card">NSSF Card (National Social Security Fund)</option>
                    <option value="nhif_card">NHIF Card (National Health Insurance Fund)</option>
                    <option value="national_insurance_number_nin">National Insurance Number (NIN)</option>
                    <option value="refugee_id">Refugee ID</option>
                    <option value="tribal_clan_id">Tribal/Clan ID</option>
                    <option value="pensioners_id">Pensioner’s ID</option>
                    <option value="certificate_of_naturalization">Certificate of Naturalization</option>
                    <option value="company_registration_number">Company Registration Number</option>
                    <option value="credit_debit_card">Credit/Debit Card</option>
                    <option value="club_membership_id">Club Membership ID</option>
                    <option value="union_membership_card">Union Membership Card</option>
                    <option value="other">Other (Please Specify)</option>
                  </select>
                  {/* <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  /> */}
                </div>
                <div className="input-container mb-4">
                  <label htmlFor="idType">Identification Type</label>
                  <select id="idType" name="idType" value={formData.idType} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" style={{ border: 'none', outline: 'none' }}>
                    <option value="" selected disabled>--Select ID Type--</option>
                    <option value="national_id">National ID</option>
                    <option value="passport">Passport</option>
                    <option value="drivers_license">Driver's License</option>
                    <option value="voters_id">Voter's ID</option>
                    <option value="social_security_number_ssn">Social Security Number (SSN)</option>
                    <option value="alien_registration_card">Alien Registration Card</option>
                    <option value="birth_certificate">Birth Certificate</option>
                    <option value="tax_identification_number_tin">Tax Identification Number (TIN)</option>
                    <option value="work_permit">Work Permit</option>
                    <option value="residence_permit">Residence Permit</option>
                    <option value="military_id">Military ID</option>
                    <option value="student_id">Student ID</option>
                    <option value="employee_id">Employee ID</option>
                    <option value="health_insurance_card">Health Insurance Card</option>
                    <option value="nssf_card">NSSF Card (National Social Security Fund)</option>
                    <option value="nhif_card">NHIF Card (National Health Insurance Fund)</option>
                    <option value="national_insurance_number_nin">National Insurance Number (NIN)</option>
                    <option value="refugee_id">Refugee ID</option>
                    <option value="tribal_clan_id">Tribal/Clan ID</option>
                    <option value="pensioners_id">Pensioner’s ID</option>
                    <option value="certificate_of_naturalization">Certificate of Naturalization</option>
                    <option value="company_registration_number">Company Registration Number</option>
                    <option value="credit_debit_card">Credit/Debit Card</option>
                    <option value="club_membership_id">Club Membership ID</option>
                    <option value="union_membership_card">Union Membership Card</option>
                    <option value="other">Other (Please Specify)</option>
                  </select>
                  {/* <input
                    type="text"
                    id="idType"
                    name="idType"
                    value={formData.idType}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  /> */}
                </div>
              </>
            )}
          </form>
          <div className='flex justify-end'>
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

export default InvestorDets;
