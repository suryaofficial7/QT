import React from "react";
import HomepageNav from "../../Components/Compo/HomepageNav";
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import Footer from "../../Components/Compo/Footer";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate()
  const handleSubscription = () => {
navigate("/register")
  }
  return (
    <div>
      <HomepageNav />
      <div className="bg-transparent  flex justify-center items-center ">
        <div className="max-w-6xl">
          <h1 className="text-3xl font-medium text-center mt-2 mb-3">
            Choose Your Plan
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
           
            {/* Basic Plan */}
            <div className="bg-white border-2 border-[#379777] rounded-xl shadow-lg p-8 hover:shadow-xl transform transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2 text-center text-[#379777]">
                Basic
              </h2>
              <p className="text-md mb-3 text-left">
                Get started with basic features.
              </p>
              <div className="text-center mb-3">
                <span className="text-3xl font-medium ">Free</span>
                <span className="text-lg">/month</span>
              </div>
              <ul className="mb-6 space-y-2 text-left text-sm">
                <li>✔️ Access to basic content</li>
                <li>✔️ Email support</li>
                <li>✔️ Single device access</li>
                <li>✔️ Access to basic content</li>
                <li>✔️ Email support</li>
                <li>✔️ Email support</li>
                <li>✔️ Email support</li>
                <li>❌ Single device access</li>
                <li>❌ Access to basic content</li>
                <li>❌ Email support</li>
                <li>❌ Single device access</li>
              </ul>
              <div className="text-center">
                <button onClick={handleSubscription}   className="bg-[#379777] text-white py-2 px-4 rounded-lg hover:bg-[#2e6d6d]">
                  Subscribe
                </button>
              </div>
            </div>


                        {/* Basic Plan */}
                        <div className="bg-white border-2 border-[#379777] rounded-xl shadow-lg p-8 hover:shadow-xl transform transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2 text-center text-[#379777]">
                Premium
              </h2>
              <p className="text-md mb-3 text-left">
                Get this with some added Features.
              </p>
              <div className="text-center mb-3">
                <span className="text-3xl font-medium ">₹300</span>
                <span className="text-lg">/month</span>
              </div>
              <ul className="mb-6 space-y-2 text-left text-sm">
                <li>✔️ Access to basic content</li>
                <li>✔️ Email support</li>
                <li>✔️ Single device access</li>
                <li>✔️ Access to basic content</li>
                <li>✔️ Email support</li>
                <li>✔️ Email support</li>
                <li>✔️ Email support</li>
                <li>✔️ Single device access</li>
                <li>✔️ Access to basic content</li>
                <li>❌ Email support</li>
                <li>❌ Single device access</li>
              </ul>
              <div className="text-center">
                <button onClick={handleSubscription}   className="bg-[#379777] text-white py-2 px-4 rounded-lg hover:bg-[#2e6d6d]">
                  Subscribe
                </button>
              </div>
            </div>



                        {/* Basic Plan */}
                        <div className="bg-white border-2 border-[#379777] rounded-xl shadow-lg p-8 hover:shadow-xl transform transition duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-2 text-center text-[#379777]">
                All Access
              </h2>
              <p className="text-md mb-3 text-left">
                Get everything done for you .
              </p>
              <div className="text-center mb-3">
                <span className="text-3xl font-medium ">₹500</span>
                <span className="text-lg">/month</span>
              </div>
              <ul className="mb-6 space-y-2 text-left text-sm">
                <li>✔️ Access to basic content</li>
                <li>✔️ Email support</li>
                <li>✔️ Single device access</li>
                <li>✔️ Access to basic content</li>
                <li>✔️ Email support</li>
                <li>✔️ Email support</li>
                <li>✔️ Email support</li>
                <li>✔️ Single device access</li>
                <li>✔️ Access to basic content</li>
                <li>✔️ Email support</li>
                <li>✔️ Single device access</li>
                {/* <li>✔ Single device access</li> */}
              </ul>
              <div className="text-center">
                <button onClick={handleSubscription}   className="bg-[#379777] text-white py-2 px-4 rounded-lg hover:bg-[#2e6d6d]">
                  Subscribe
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
   
  )
}


export default Pricing;
