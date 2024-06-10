import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from './Sidebar'
const DashboardLayout = () => {
  return (
    <div className='App'>
      <Navbar/>
      <div  className='flex gap-4 flex-col md:flex-row max-w-[1240px]'>
      <Sidebar/>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default DashboardLayout