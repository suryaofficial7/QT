import React from 'react'
import { RiAccountBoxFill } from "react-icons/ri";
import { MdPaid } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from "react-icons/hi";

const ProfileCard = () => {
  return (
    <div  id='card' className='fade  car shadow-2xl absolute hidden md:block w-[15vw] right-20 mt-4 text-left  p-3 rounded-md h-auto z-10 bg-white color'>


<div className='w-[25%] mx-auto my-3'>
    <img src="https://i.pinimg.com/736x/0f/d5/53/0fd553939c4d72825172744e4aa4bf02.jpg" className='rounded-full'  alt="User pic" />
</div>
<ul className='inline-block'>
<Link to={"/user/profile"} className='px-2 py-1 hover:theme-text-green cursor-pointer inline-flex self-center '><RiAccountBoxFill  size={20} className='mr-3 inline-flex self-center'/> Profile</Link><br />
<Link to={"/user/setting"} className='px-2 py-1 hover:theme-text-green cursor-pointer inline-flex self-center '><IoIosSettings size={20} className='mr-3 inline-flex self-center'/>  Setting </Link>
<Link to={"/subscriptions"} className='px-2 py-1 hover:theme-text-green cursor-pointer inline-flex self-center '><MdPaid size={20} className='mr-3 inline-flex self-center'/>  Subscription</Link>
<Link to={"/logout"}       className='px-2 py-1 hover:text-red-800 cursor-pointer inline-flex self-center '><HiOutlineLogout size={20} className='mr-3 inline-flex self-center'/>  Logout</Link>
<div className='text-center mt-2 text-gray-400 hover:underline'>
    <Link to="/terms&conditions" className='text-sm text-center'>Terms and Conditions</Link>
</div>
</ul>
            </div>
  )
}

export default ProfileCard