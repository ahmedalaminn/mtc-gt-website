import React from 'react'
import logo from '/src/assets/logo.avif'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className='header flex fixed mx-auto justify-center items-center rounded-full space-x-6 py-3 px-8 mt-5 bg-gray-700 bg-opacity-80 text-gray-400 font-bold'>
        <div className="font-bold">
          <a href="#landing"> <img src={logo} className="w-10 h-10" /> </a>
        </div>
        <div>
          <nav>
            <ul className='flex space-x-6'>
              <li>
                <a href="#about" className="hover:text-gray-400">About</a>
              </li>
              <li>
                <a href="#calendar" className="hover:text-gray-400">Calendar</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
              </li>
              <li>
                <Link to="/checkout" className="hover:text-gray-400">
                  Donate
               </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header;
