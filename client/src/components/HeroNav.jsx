import React, { Suspense, useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { RiAccountBoxFill } from "react-icons/ri";
import { MdPaid } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import axios from "axios";
import ProfileCard from "./Compo/ProfileCard";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/slice/userSlice";
import AiRouteDetails from "./AiComponents/AiRouteDetails";

const HeroNav = () => {

  // ! RTQ
  const userData = useSelector((state)=>state.userInfo.users);

  const dispatch = useDispatch()
const cookie = new Cookies();



// ! use effect 
useEffect(() => {
  const id = cookie.get("QTid")
  axios({
url:`http://localhost:1234/api/v1/user/single/${id}`,
method:"get",
  }).then((data)=>{
    // console.log(data.data)
    const userApiData = data.data
    dispatch(setUser(userApiData))

  }).catch((error)=>{console.log(error.message)})

},[])

  const [card, setCard] = useState(null);

  const showProfileCard = () => {
    card == null ? setCard(true) : setCard(null);
  };
  return (
    <>
      <nav className="w-[100%] m-auto">
        <ul className="flex w-[90%] m-auto justify-between">
          <div className="self-center hidden md:block">
            <li className="sm:text-sm text-xs md:text-lg theme-text-green cursor-pointer">
             <AiRouteDetails/>
            </li>
          </div>


          <div className="flex">
            <Link
              className="inline-block self-center"
              to={"/dashboard/notifications"}
            >
              {" "}
              <li className="inline-block self-center m-0 md:mx-3">
                {" "}
                <IoIosNotifications
                  size={25}
                  className="cursor-pointer hover:theme-text-green transition-all ease-in-out duration-150"
                />
              </li>
            </Link>
            <li className="flex">
              <div className="inline-block self-center w-auto">
                <img
                  width={30}
                  height={30}
                  //   height="50"
                  className="mr-2 justify-center inline-grid self-center rounded-lg"
                  src="https://i.pinimg.com/736x/0f/d5/53/0fd553939c4d72825172744e4aa4bf02.jpg"
                  alt="s"
                />
              </div>
              <div className="text-left w-[30vw] md:w-auto">
                <p className="sm:text-sm text-xs md:text-lg">{userData.fullName &&  userData.fullName}</p>
                <p className="text-xs w-[50%] md:w-auto overflow-hidden">
                {userData._id &&  userData._id}
                </p>
              </div>
              <div className="md:inline-block  self-center hidden ">
                <RiArrowDropDownLine
                  onClick={showProfileCard}
                  size={25}
                  className="-m-1 cursor-pointer hover:-translate-y-1 transition-all ease-in-out"
                />

                {/* CARD */}

                {card && <ProfileCard />}
              </div>
            </li>
          </div>
        </ul>
      </nav>
      
      <hr className="w-[90%] mt-2 m-auto" />
    </>
  );
};

export default HeroNav;
