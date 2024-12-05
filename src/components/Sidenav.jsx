import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Sidenav = () => {
  const [small, setSmall] = useState(window.innerWidth <= 768);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setSmall(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();

  const handleItemClick = (page) => {
    setSelected(page);
    navigate(`/${page}`);
  };

  return (
    <div>
      {small ? (
        <div className="dropdown absolute top-6 left-4">
          <button>
            <i className="bx bx-menu text-2xl"></i>
          </button>
          <div className="dropdown-content">
            <a onClick={() => handleItemClick('dashboard')}>Dashboard</a>
            <a onClick={() => handleItemClick('investor-mgt')}>Investor Mgt</a>
            <a onClick={() => handleItemClick('document-mgt')}>Document Mgt</a>
            <a onClick={() => handleItemClick('communication')}>Communication</a>
            <a onClick={() => handleItemClick('reports')}>Reports</a>
            <a onClick={() => handleItemClick('settings')}>Settings</a>
            <a onClick={() => handleItemClick('support')}>Support</a>
          </div>
        </div>
      ) : (
        <div className="bg-buttonBlue text-white w-fit min-h-screen flex flex-col p-5">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <Logo />
          </div>
          <ul className="flex flex-col gap-6 text-sm ml-1 mt-24 cursor-pointer w-full">
            <li
              className={`flex items-center gap-2 pl-2 ${selected === 'dashboard' ? 'border-l-4 border-white' : ''}`}
              onClick={() => handleItemClick('dashboard')}
            >
              <i className="bx bxs-dashboard"></i> Dashboard
            </li>
            <li
              className={`flex items-center gap-2 pl-2 ${selected === 'investor-mgt' ? 'border-l-4 border-white' : ''}`}
              onClick={() => handleItemClick('investor-mgt')}
            >
              <i className="bx bx-clipboard"></i> Investor Mgt
            </li>
            <li
              className={`flex items-center gap-2 pl-2 ${selected === 'document-mgt' ? 'border-l-4 border-white' : ''}`}
              onClick={() => handleItemClick('document-mgt')}
            >
              <i className="bx bxs-folder"></i> Document Mgt
            </li>
            <li
              className={`flex items-center gap-2 pl-2 ${selected === 'communication' ? 'border-l-4 border-white' : ''}`}
              onClick={() => handleItemClick('communication')}
            >
              <i className="bx bxs-user"></i> Communication
            </li>
            <li
              className={`flex items-center gap-2 pl-2 ${selected === 'reports' ? 'border-l-4 border-white' : ''}`}
              onClick={() => handleItemClick('reports')}
            >
              <i className="bx bx-folder-open"></i> Reports
            </li>
            <li
              className={`flex items-center gap-2 pl-2 ${selected === 'settings' ? 'border-l-4 border-white' : ''}`}
              onClick={() => handleItemClick('settings')}
            >
              <i className="bx bx-cog"></i> Settings
            </li>
            <li
              className={`flex items-center gap-2 pl-2 ${selected === 'support' ? 'border-l-4 border-white' : ''}`}
              onClick={() => handleItemClick('support')}
            >
              <i className="bx bx-support"></i> Support
            </li>
          </ul>
          <div className="absolute bottom-10 flex items-center gap-1 cursor-pointer" onClick={() => navigate("/")}>
            <i className="bx bx-log-out"></i>Log Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
