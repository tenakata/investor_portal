import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ForgotPage from './pages/ForgotPage';
import ResetPage from './pages/ResetPage';
import Dashboard from './pages/Dashboard';
import Dashboardi from './pages/Dashboardi.jsx';
import InvestorMgt from './pages/InvestorMgt.jsx';
import InvestorMagt from './pages/InvestorMagt.jsx';
import BusinessDets from './components/BusinessDets.jsx';
import AddressDets from './components/AddressDets.jsx';
import Documents from './components/Documents.jsx';
import InvestorDets from './components/InvestorDets.jsx';

const App = () => {
  const [corporate, setCorporate] = useState(false);
  const [formData, setFormData] = useState({});

  const updateFormData = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        ...data,
      },
    }));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPage />} />
        <Route path='/reset-password/:email' element={<ResetPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/investor' element={<Dashboardi />} />
        <Route path='/investor-mgt' element={<InvestorMgt />} />
        <Route path='/investor-magt' element={<InvestorMagt />} />
        <Route
          path='/details/investorDets'
          element={
            <InvestorDets
              corporate={corporate}
              setCorporate={setCorporate}
              formData={formData}
              updateFormData={updateFormData}
            />
          }
        />
        <Route
          path='/details/business'
          element={
            <BusinessDets
              corporate={corporate}
              setCorporate={setCorporate}
              formData={formData}
              updateFormData={updateFormData}
            />
          }
        />
        <Route
          path='/details/address'
          element={
            <AddressDets
              corporate={corporate}
              setCorporate={setCorporate}
              formData={formData}
              updateFormData={updateFormData}
            />
          }
        />
        <Route
          path='/details/documents'
          element={
            <Documents
              corporate={corporate}
              setCorporate={setCorporate}
              formData={formData}
              updateFormData={updateFormData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
