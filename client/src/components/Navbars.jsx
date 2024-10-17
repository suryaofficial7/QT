import React from 'react'
import {Link  } from "react-router-dom"
import Greeting from './AiComponents/Greeting'
import { useSelector } from 'react-redux'

const Navbars = () => {


  const userData = useSelector((state)=>state.userInfo.users)

  // ! redux 



  return (
    <>
    <div id="left" className="w-[100%] over md:w-[90%] mb-2 m-auto  flex-1 md:flex justify-between text-right ">
<ul className=''>
  <p className='sm:text-lg md:text-2xl text-center  flex justify-center capitalize'>{<Greeting  />}, {userData.fullName}</p>
  <p className='text-xs text-center theme-text-green'>Welcome to the QuickTrack service</p>
</ul>
      <ul className='hidden md:inline-flex self-center w-[100%] md:w-auto justify-center md:justify-end text-xs md:text-sm '>
        <li><Link to={"/dashboard"} className='hover:border-green-700  hover:border border-transparent border rounded-lg px-0.5 md:px-2 py-1 hover:theme-text-green cursor-pointer hover:-translate-y-0.5 font-semibold transition-all duration-100 ease-in-out '>Overview</Link></li>

        

        <li><Link to={"/dashboard/bussiness"} className='hover:border-green-700  hover:border border-transparent border rounded-lg px-0.5 md:px-2 py-1 hover:theme-text-green cursor-pointer hover:-translate-y-0.5 font-semibold transition-all duration-100 ease-in-out '>Bussiness</Link></li>

        <li><Link to={"/dashboard/expense"} className='hover:border-green-700  hover:border border-transparent border rounded-lg px-0.5 md:px-2 py-1 hover:theme-text-green cursor-pointer hover:-translate-y-0.5 font-semibold transition-all duration-100 ease-in-out '>Expense</Link></li>

        <li><Link to={"/dashboard/employee"} className='hover:border-green-700  hover:border border-transparent border rounded-lg px-0.5 md:px-2 py-1 hover:theme-text-green cursor-pointer hover:-translate-y-0.5 font-semibold transition-all duration-100 ease-in-out '>Employees</Link></li>

        <li><Link to={"/dashboard/secure"} className='hover:border-green-700  hover:border border-transparent border rounded-lg px-0.5 md:px-2 py-1 hover:theme-text-green cursor-pointer hover:-translate-y-0.5 font-semibold transition-all duration-100 ease-in-out '>Secure</Link></li>
        
        <li><Link to={"/dashboard/schedule"} className='hover:border-green-700  hover:border border-transparent border rounded-lg px-0.5 md:px-2 py-1 hover:theme-text-green cursor-pointer hover:-translate-y-0.5 font-semibold transition-all duration-100 ease-in-out '>schedule</Link></li>

      </ul>
      </div>
      <hr className='w-[90%] m-auto' />
      </>
  )
}

export default Navbars