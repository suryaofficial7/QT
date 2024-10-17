import React from 'react'

const QuickTrackUtils = () => {

    const handleBtn = (e) => {
        console.log("Checking....1")
        console.log(e.target.name)
       
        alert("Thisfeature is not for Basic Plan Users")
       }
       
  return (
    <div className="w-[100%]  m-auto  px-2 py-4 rounded-xl  max-h-[90vh]  text-justify overflow-scroll ">
    <p className='text-lg ml-3'><span className='theme-text-green font-semibold '>Quick</span><span className='theme-text-yellow font-semibold'>Track</span> Utils</p>
  
  {/* Upgrade Your Plan */}
            <div className="md:w-[100%] w-[100%] mx-auto rounded-lg m-2 px-3 py-3 border-gray-400   shadow-lg text-left border transition-all duration-100 ease-in-out delay-100">
              <p className="text-md font-medium  flex ">
              Subscription Type
              </p>
  
              <p className="text-lg font-medium theme-text-green">Basic Plan</p>
              <p className="text-xs text-gray-800 ">
                You must change to Premium or All Access Package for rich services
              </p>
              <button className="w-[100%] bg-red-600 py-1 text-sm rounded-lg mt-3 hover:text-white text-gray-200 hover:bg-red-700">
                Upgrade Your Plan
              </button>
            </div>
  
  {/* {Your Storage} */}
            <div className="md:w-[100%] w-[100%] mx-auto rounded-lg m-2 px-3 py-3 border-gray-400   shadow-lg text-left border transition-all duration-100 ease-in-out delay-100">
              <p className="text-md font-medium  flex ">
              Storage Details
              </p>
  
              <p className="text-lg font-medium theme-text-green">500mb/1000mb</p>
              <p className="text-xs text-gray-800 ">
                This is the Useage of your file system and YOur data storage
              </p>
              <button className="w-[100%] theme-bg-green py-1 text-sm rounded-lg mt-3 hover:text-white text-gray-200 hover:bg-red-700">
                Upload More files
              </button>
            </div>
  
  {/* { your Data} */}
  <div className="md:w-[100%] w-[100%] mx-auto rounded-lg m-2 px-3 py-3 border-gray-400   shadow-lg text-left border transition-all duration-100 ease-in-out delay-100">
              <p className="text-md font-medium  flex ">
               your Data
              </p>
  
              <p className="text-lg font-medium theme-text-green">Get All Files</p>
              <p className="text-xs text-gray-800 ">
              All the Files related to use ay one place
              </p>
              <div className="flex flex-wrap">
              <button onClick={handleBtn} name="userData"   className={`w-[45%] mx-auto theme-bg-green py-2 text-sm rounded-lg mt-3 hover:text-white text-gray-200 hover:bg-green-800`}>
                 Your Data
              </button>
  
              <button onClick={handleBtn} name="employeeData" className="w-[45%] mx-auto theme-bg-green py-2 text-sm rounded-lg mt-3 hover:text-white text-gray-200 hover:bg-green-800">
                  Employee Data
              </button>
  
              <button onClick={handleBtn} name="expenseData" className="w-[45%] mx-auto theme-bg-green py-2 text-sm rounded-lg mt-3 hover:text-white text-gray-200 hover:bg-green-800">
                 Expense Data
              </button>
  
              <button onClick={handleBtn} name="bussinessData" className="w-[45%] mx-auto theme-bg-green py-2 text-sm rounded-lg mt-3 hover:text-white text-gray-200 hover:bg-green-800">
                 Bussiness Data
              </button>
  
              <button onClick={handleBtn} name="stockData" className="w-[45%] mx-auto theme-bg-green py-2 text-sm rounded-lg mt-3 hover:text-white text-gray-200 hover:bg-green-800">
                 Stock Data
              </button>
  
              <button onClick={handleBtn} name="secureData" className="w-[45%] mx-auto theme-bg-green py-2 text-sm rounded-lg mt-3 hover:text-white text-gray-200 hover:bg-green-800">
                 All Secure Files
              </button>
              </div>
            </div>
  
  
              
            </div>
  )
}

export default QuickTrackUtils