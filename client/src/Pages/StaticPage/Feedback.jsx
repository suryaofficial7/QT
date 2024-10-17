import React from "react";
import HomepageNav from "../../Components/Compo/HomepageNav";
import { CiStar } from "react-icons/ci";
import Footer from "../../Components/Compo/Footer";



const Feedback = () => {
  const setstar = () => {
    console.log("START")
  }
  return (
  
    <>
      <HomepageNav  />
      <br />
      <div className="fade h-[90vh] md:w-[100vh]  items-center inline-block self-center  ">
        <p className="text-3xl theme-text-green ">Feedback Form</p>

        <div className=" w-[१०0%] md:w-[50%] m-auto rounded-b-2xl bg-white  shadow-2xl mt-6 ">
          <div className="theme-bg-green w-[100%] rounded-t-2xl pr-2">
           
           <div className="w-[100%] pl-4 pt-4 pb-4"> 
<p className="text-md md:text-lg text-left mb-2">Send us your feedback!</p>
<p className="text-sm md:text-md text-left">Do you have a suggestion or found same bug?</p>
<p className="text-sm md:text-md text-left">let us know in the field below</p>

           </div>

          </div>
          <hr />
          <div className=" text-left rounded-b-2xl my-2  p-3">
            <div>
            <p>Enter your name :</p>
              <input type="text" 
                className="outline-green-700 border-green-600 border rounded-lg px-2 py-1 my-2 bg-gray-100 w-[100%]"
                name="" id="" />
              <p>How was your Experience ?</p>

              <p className="flex">

<CiStar onClick={setstar} size={25} className="mx-1"/>
<CiStar onClick={setstar} size={25} className="mx-1"/>
<CiStar onClick={setstar} size={25} className="mx-1"/>
<CiStar onClick={setstar} size={25} className="mx-1"/>
<CiStar onClick={setstar} size={25} className="mx-1"/>


                </p>
            </div>
            <div>
              <textarea
                placeholder="Describe your experience here...."
                type="text"
                className="h-36  outline-green-700 border-green-600 border rounded-lg px-2 py-1 mt-3 bg-gray-100 w-[100%]"
                name=""
                id=""
                cols={10}
              />
            </div>

            <div className="inline-flex self-center mb-3">
              <div className="p-2 self-center inline-flex text-center m-auto">
                <input
                  type="radio"
                  name="mess"
                  value="bug"
                  id=""
                />
                <span className="self-center pl-1">Bug</span>
              </div>
              <div className="p-2 self-center inline-flex text-center m-auto">
                <input
                  type="radio"
                  name="mess"
                  value="suggest"
                  id=""
                />
                <span className="self-center pl-1">Suggest</span>
              </div>
              <div className="p-2 self-center inline-flex text-center m-auto">
                <input
                  type="radio"
                  name="mess"
                  value="others"
                  
                  id=""
                />
                <span className="self-center pl-1">other</span>
              </div>
            </div>

            <div className="w-[100%] my-4">
              <button className="py-1 w-[100%] px-3 theme-border-green border-2 rounded-lg hover:text-white hover:-translate-y-0.5 hover:shadow-lg theme-bg-green transition-all duration-200 ease-in-out">Send Feedback</button>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default Feedback;
