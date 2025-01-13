import React from 'react'
import { FaTwitter } from "react-icons/fa";


const Footer: React.FC = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Good Blush</h3>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l bg-gray-800 text-white outline-none w-full"
              />
              <button className="p-2 bg-white text-black rounded-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 011.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
  
          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Support</h3>
            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>Good Blush@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
  
          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Account</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shop
                </a>
              </li>
            </ul>
          </div>
  
          {/* Quick Link Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className="flex space-x-4">
              <img
                src="path-to-qr-code.png"
                alt="QR Code"
                className="w-16 h-16"
              />
              <div className="space-y-2">
                <a href="#">
                  <img
                    src="path-to-google-play.png"
                    alt="Google Play"
                    className="w-24"
                  />
                </a>
                <a href="#">
                  <img
                    src="path-to-app-store.png"
                    alt="App Store"
                    className="w-24"
                  />
                </a>
              </div>
            </div>
           
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; Copyright Rimel 2025. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
   
  
