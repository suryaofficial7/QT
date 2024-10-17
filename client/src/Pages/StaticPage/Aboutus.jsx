import React from 'react';
import HomepageNav from '../../Components/Compo/HomepageNav'; // Import the Navbar
import Footer from '../../Components/Compo/Footer';

const AboutPage = () => {
  return (
    <>
      <HomepageNav />
    <div className="fade text-[#45474B] min-h-screen">
      {/* Include Navbar at the top */}

      {/* Hero Section */}
      <section className="bg-[#379777] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-white">
            Discover our journey, values, and the incredible team that makes it all possible.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-[#45474B] ">Our Story</h2>
            <p className="text-md text-[#45474B] mb-6 text-justify">
            Welcome to QuickTrack, your all-in-one solution for managing financial operations and business data with ease and precision. Designed for businesses of all sizes, QuickTrack offers powerful tools to track income, expenses, employee salaries, and generate insightful charts and graphs. With a focus on multi-business and multi-office management, our platform simplifies complex financial tasks, helping you make informed decisions that drive growth.

            </p>
            <p className="text-md text-[#45474B] text-justify">
        
Our commitment is to provide secure, reliable, and user-friendly services that streamline data management, ensuring that your business runs smoothly and efficiently. At QuickTrack, we believe in empowering businesses to reach their full potential with cutting-edge technology and actionable insights.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Company Story"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-[#F4CE14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#45474B] mb-6">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#379777] mb-4">Mission</h3>
              <p className="text-md text-[#45474B] text-justify">
              QuickTrack's mission is to make managing business finances simple and secure. We help companies make better decisions with easy-to-use tools and reliable data insights.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#379777] mb-4">Vision</h3>
              <p className="text-md text-[#45474B] text-justify">
              At QuickTrack, we aim to be the go-to solution for easy and efficient financial management, helping businesses thrive with simple, smart tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#45474B] mb-6">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            
          <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#45474B]">Surya SK</h3>
              <p className="text-[#379777]">CEO</p>
              <p className="text-[#45474B] text-sm mt-2">
                John is the visionary behind our company, leading us with passion and dedication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#45474B]">John Doe</h3>
              <p className="text-[#379777]">CEO</p>
              <p className="text-[#45474B] text-sm mt-2">
                John is the visionary behind our company, leading us with passion and dedication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#45474B]">John Doe</h3>
              <p className="text-[#379777]">CEO</p>
              <p className="text-[#45474B] text-sm mt-2">
                John is the visionary behind our company, leading us with passion and dedication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#45474B]">John Doe</h3>
              <p className="text-[#379777]">CEO</p>
              <p className="text-[#45474B] text-sm mt-2">
                John is the visionary behind our company, leading us with passion and dedication.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#379777] py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Join Us on Our Journey</h2>
          <p className="text-lg text-white mb-6">
            We are always looking for talented, passionate individuals to join our team and help us make a difference.
          </p>
          <p
            className="bg-[#F4CE14] text-[#45474B] px-8 py-3 w-[200px] m-auto justify-center text-center rounded-lg font-semibold hover:bg-white hover:text-[#379777] transition" onClick={()=>{alert('No hiring !!!')}}
          >
            Contact Us
          </p>
        </div>
      </section>
      <Footer/>
    </div>
    </>
  );
};

export default AboutPage;
