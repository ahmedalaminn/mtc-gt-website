import React from 'react'
import logo from '/src/assets/logo.avif'

const Header = () => {
  return (
    <div className = "flex justify-center">
      <div className = 'header flex fixed mx-auto justify-center items-center rounded-full space-x-10 py-5 px-10 mt-5 bg-gray-700 text-gray-400 font-bold'>
          <div className = "font-bold">
            <a href = "#landing"> <img src = {logo} className = "w-12 h-12"/> </a>
          </div>
          <div>
            <nav>
              <ul className = 'flex space-x-10'>
                <li>
                  <a href="#about" className="hover:text-gray-400">About</a>
                </li>
                <li>
                  <a href="#calendar" className="hover:text-gray-400">Calendar</a>
                </li>
                <li>
                  <a href="#donate" className="hover:text-gray-400">Donate</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-400">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
      </div>
    </div>

  )
}

export default Header
