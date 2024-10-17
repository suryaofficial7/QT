import React from 'react'
import HeroNav from '../../Components/HeroNav'
import Navbars from '../../Components/Navbars'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <HeroNav />
<Navbars />
<Outlet/></>
  )
}

export default Layout