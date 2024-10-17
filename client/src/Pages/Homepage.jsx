import React, { useEffect, useState } from "react";

import HomepageNav from "../Components/Compo/HomepageNav";
import bg1 from "../assets/Imgs/bg1.jpeg"
import bg2 from "../assets/Imgs/bg2.jpeg"
import icon from "../assets/Imgs/icon.jpeg"
import Footer from "../Components/Compo/Footer";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("jwtToken")
  
  if(token){
    navigate("/dashboard")
  }else{

  }
  }, [  ])
  


  return (
    <>
      <HomepageNav />

      <div className="w-[90%] m-auto md:flex " >
        <div id="one" className="w-[100%] md:w-[60%]  text-left p-6 md:p-12 md:pt-1 m-auto">

      <p className="text-md md:text-3xl ">  Seamlessly manage & organize all your data from one App , designed  your workflow and keep everything at your fingertips</p>


        <p className="pr-6 mt-3">Effortlessly Organize Your Data and Streamline Your Workflow All in One Place  <span className='theme-text-green font-medium'>QUICK</span><span className=' font-medium theme-text-yellow '>TRACK</span></p>
      <button onClick={()=>{navigate('/register')}} className="theme-bg-green px-4 py-2 rounded-lg mt-4 hover:scale-95 transition-all duration-100 ease-in-out hover:shadow-lg text-gray-400 hover:text-white">Get Started</button>
<div className="mt-7">
<p className="text-2xl">  Services we Provide</p>
<p className="text-xs md:w-[50vh]">Beautiful and fuctional websites and app to provide best  user experience and grow your Bussiness</p>


<div className="md:flex justify-between overflow-scroll w-[100%] py-2 border md:border-none rounded-xl md:h-auto h-[400px] mt-4">

<div className="w-[250px] mx-2 border border-gray-500 p-2 py-4 my-2 rounded-lg bg-white shadow-lg text-sm">
<p className="font-medium pb-2 theme-text-green">IT & Softwares </p>
<p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error inventore ipsam minus et quasi hic voluptates culpa, praesentium placeat dolores!</p>
<button className="mt-2 theme-text-green font-medium">Contact us</button>
</div>
  
<div className="w-[250px] mx-2 border border-gray-500 p-2 py-4 my-2 rounded-lg bg-white shadow-lg text-sm">
<p className="font-medium pb-2 theme-text-green">UI/UX Designing </p>
<p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error inventore ipsam minus et quasi hic voluptates culpa, praesentium placeat dolores!</p>
<button className="mt-2 theme-text-green font-medium">Contact us</button>
</div>

  
<div className="w-[250px] mx-2 border border-gray-500 p-2 py-4 my-2 rounded-lg bg-white shadow-lg text-sm">
<p className="font-medium pb-2 theme-text-green">Enterprice Applications </p>
<p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error inventore ipsam minus et quasi hic voluptates culpa, praesentium placeat dolores!</p>
<button className="mt-2 theme-text-green font-medium">Contact us</button>
</div>



</div>
<div>
  <div>
  <p className="text-xl mt-6">  Our Clients and Sponsers</p>
    <div className="flex justify-between overflow-scroll mt-2">
<div className="w-[70px] h-[70px] bg-white border  p-2  rounded-lg">a</div>
<div className="w-[70px] h-[70px] bg-white border  p-2  rounded-lg">a</div>
<div className="w-[70px] h-[70px] bg-white border  p-2  rounded-lg">a</div>
<div className="w-[70px] h-[70px] bg-white border  p-2  rounded-lg">a</div>
<div className="w-[70px] h-[70px] bg-white border  p-2  rounded-lg">a</div>
<div className="w-[70px] h-[70px] bg-white border  p-2  rounded-lg">a</div>
<div className="w-[70px] h-[70px] bg-white border  p-2  rounded-lg">a</div>
    </div>


  </div>
</div>
</div>

        </div>

          <div className="w-[100%] p-2  md:w-[40%] m-auto" id="two">
        <div className="md:flex justify-start"><img src={icon} className="md:w-[50%]    my-2 md:m-0   rounded-xl" alt="" /></div>
        <div className="md:flex justify-end"><img src={bg2}   className="md:w-[50%]    my-2 md:m-0 rounded-xl" alt="" /></div>
        <div className="md:flex justify-left"><img src={bg1}  className="md:w-[50%]    my-2 md:m-0  rounded-xl" alt="" /></div>
          </div>
        </div>

        <Footer/>
    </>
  );
};

export default Homepage;
