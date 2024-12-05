import React from 'react'
import Sidenav from '../components/Sidenav'
import MgtNav from '../components/MgtNav'
import SidenavInves from '../components/SidenavInves'
import InvestorDash from '../components/InvestorDash'

const Dashboardi = () => {
  return (
    <div className='flex bg-buttonBlue min-w-screen'>
        <span className='lg:w-sidenavW w-0'>
            <SidenavInves />
        </span>
        <span className='flex flex-col bg-dashbg lg:rounded-l-2xl lg:w-contentW p-7 w-full'>
            <MgtNav />
            <InvestorDash />
        </span>
    </div>
  )
}

export default Dashboardi