import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo/Brand Info */}
          <div>
            <h1 className="text-xl font-bold text-white mb-4"> <Link to="/" > <p className='text-2xl'><span className='theme-text-green font-semibold '>Quick</span><span className='theme-text-yellow font-semibold'>Track</span></p></Link>
            </h1>
            <p className="text-gray-400">
              Bringing the best products to our customers with quality and trust.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to='/' className="hover:text-white text-gray-400 transition">Home</Link></li>
              <li><Link to='/aboutus' className="hover:text-white text-gray-400 transition">About Us</Link></li>
              <li><Link to='/features' className="hover:text-white text-gray-400 transition">Services</Link></li>
              <li><Link to='/feedback' className="hover:text-white text-gray-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex justify-around">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={24}  />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p className='cursor-none'>&copy; {new Date().getFullYear()} All rights reserved to QuickTrack.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
