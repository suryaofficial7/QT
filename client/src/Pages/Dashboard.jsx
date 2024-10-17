import React, { lazy, Suspense, useEffect, useState } from "react";

import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Link } from "react-router-dom";

// import LineChart from "../Components/Charts/LineChart";

const LineChart =  lazy(()=>import("../Components/Charts/LineChart"));
const QuickTrackUtils = lazy(()=>import("./UserPages/QuickTrackUtils"));


const Dashboard = () => {

  const [date, setDate] = useState(new Date());






  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div className="w-[90%] m-auto block  md:flex fade">
      {/* Dashboard */}
      <div className="block">
        {/* TOP BOX */}
        <div className=" w-[100%] m-auto md:w-[65vw]  flex flex-wrap justify-around ">
          {/* Month Saving Or balance */}
          
          <div className="md:w-[350px] w-[100%] rounded-lg m-2 px-3 py-3 border-gray-400   shadow-lg text-left border transition-all duration-100 ease-in-out delay-100">
            <p className="text-md font-medium theme-text-green flex ">
              My Balance{" "}
              <MdOutlineAccountBalanceWallet className="inline-flex self-center ml-2 font-bold" />
            </p>

            <p className="text-xl font-medium ">Rs.13,232,123</p>
            <p className="text-xs mb-4">120% more than last month</p>
            <p className="text-xs text-gray-800 ">
              This is a total amount you have saving in total this month
            </p>
            <Link to={"/dashboard/expense"}>  <button className="w-[100%] theme-bg-green py-1 text-sm rounded-lg mt-3 hover:text-white hover:bg-green-700">
             Add New Income
            </button></Link>
          </div>

          {/* Month Income */}
          <div className="md:w-[250px] w-[100%] rounded-lg m-2 px-3 py-3 border-gray-400   shadow-lg text-left border transition-all duration-100 ease-in-out delay-100">
            <p className="text-md font-medium theme-text-green flex ">
              My Income{" "}
              <BsGraphUpArrow className="inline-flex self-center ml-2 font-bold" />
            </p>
            <p className="text-xl font-medium ">Rs.13,232</p>
            <p className="text-xs mb-4">120% more than last month</p>
            <p className="text-xs text-gray-800 ">
              This is a total amount you have saving in total this month
            </p>
            <Link to={"/dashboard/expense"}> 
            <button className="w-[100%] theme-bg-green py-1 text-sm rounded-lg mt-3 hover:text-white hover:bg-green-700">
             Add New Income
            </button>
            </Link>
          </div>

          {/* Month Expense */}
          <div className="md:w-[250px] w-[100%] rounded-lg m-2 px-3 py-3 border-gray-400   shadow-lg text-left border transition-all duration-100 ease-in-out delay-100">
            <p className="text-md font-medium text-red-600 flex ">
              My Expense{" "}
              <BsGraphDownArrow className="inline-flex self-center ml-2 font-bold" />
            </p>

            <p className="text-xl font-medium ">Rs.13,232</p>
            <p className="text-xs mb-4">120% more than last month</p>
            <p className="text-xs text-gray-800 ">
              This is a total amount you have saving in total this month
            </p>
            
            <Link to={"/dashboard/expense"}> 
            <button className="w-[100%] bg-red-600 py-1 text-sm rounded-lg mt-3 hover:text-white text-gray-200 hover:bg-red-700">
              Add New Expense
            </button>
            </Link>
          </div>
        </div>

        {/* Chart Line JS */}
        <Suspense fallback={<p>Loading</p>}>

        <div  className=" m-auto bg-transparent">
          <LineChart />
          </div>
        </Suspense>
      </div>


      <div className="w-[100%] m-auto md:w-[30vw]">


    


          {/*QUICK Track Utilities  */}
        <Suspense fallback={<p>Loading</p>}>

<QuickTrackUtils/>
</Suspense>


      </div>

    </div>
  );
};

export default Dashboard;
