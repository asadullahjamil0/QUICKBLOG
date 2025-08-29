import React from 'react'
import Dashboard from './Dashboard'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import Login from '../../components/admin/Login'

const Layout = () => {

  const navigate = useNavigate();
  const Logout = () => {
    navigate('/')
  }

  return (
    <>
      <div className='flex justify-between px-4 py-2 items-center sm:px-12 h-[70px] border-b border-gray-200'>
        <img src={assets.logo} alt="" className='w-32 sm:w-40 cursor-pointer' onClick={() => navigate('/')} />
        <button onClick={Logout} className='text-sm px-8 py-2 bg-primary cursor-pointer rounded-full text-white'>Logout</button>
      </div>

      <div className='flex h-[calc(100vh-70px)]'>
        <div className='w-64'>
          <Sidebar />
        </div>
        <div className='flex-1'>
          <Outlet />
        </div>

      </div>

    </>
  )
}

export default Layout
