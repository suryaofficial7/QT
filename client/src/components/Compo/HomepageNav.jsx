import React, { useState } from 'react'
import Mbutton from "../Compo/Mbutton"
import { Link } from 'react-router-dom'
import { IoIosMenu } from 'react-icons/io'

const HomepageNav = () => {
  const [show, setshow] = useState(false)
const handleChange = () => {
  show==true?setshow(false):setshow(true)
}
  return (
    <>
    <div className='md:flex block justify-between my-2 text-center max-w-[1280px] m-auto overflow-scroll'>

 <Link to="/" > <p className='text-2xl '><span className='theme-text-green font-semibold '>Quick</span><span className='theme-text-yellow font-semibold'>Track</span></p> </Link><span onClick={handleChange}> <IoIosMenu size={30} className='block md:hidden absolute right-4 top-5'/></span>

<ul className={`md:flex block  ${show==true?'hidden':'block'} `}>
  <li className='py-1 text-md px-3 hover:theme-text-green hover:cursor-pointer'> <Link to="/features"> Features </Link></li>
  <li className='py-1 text-md px-3 hover:theme-text-green hover:cursor-pointer'> <Link to="/aboutus"> About us </Link></li>
  <li className='py-1 text-md px-3 hover:theme-text-green hover:cursor-pointer'><Link to="/pricing">  Pricing </Link></li>
  <li className='py-1 text-md px-3 hover:theme-text-green hover:cursor-pointer'> <Link to="/feedback"> Feedback </Link></li>
</ul>

<Mbutton   title="Login" link="/login" />
</div >


<hr />
    </>
  )
}

export default HomepageNav