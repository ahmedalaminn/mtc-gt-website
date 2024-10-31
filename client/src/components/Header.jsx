import React from 'react'

const Header = () => {
  return (
    <div>
      <div className = 'header flex fixed top-0 w-full justify-between m-auto p-[15px] text-header_text bg-background'>
        
          <div className = "font-bold">
            <h2 className> Muslim Tech Collaborative @ Georgia Tech </h2>
          </div>

          <div>
            <nav>
              <ul className = 'flex space-x-6'>
                <li>
                  <a href="#home" className="hover:text-gray-400">Home</a>
                </li>
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
