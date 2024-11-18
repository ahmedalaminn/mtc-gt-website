import React from 'react'

// newsletter and inquiry form 
const Contact = () => {
  return (
    <div className="h-dvh flex flex-col justify-center items-center bg-gray-900 text-white p-6">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="text-lg mb-6">
        Thank you for your interest in MTC at Georgia Tech! If you have any inquiries or would like to stay updated on our latest projects and events, please feel free to contact us.
      </p>
      <div className="flex justify-center mb-6">
        <a href="https://www.instagram.com/mtcgatech/profilecard/?igsh=MWdiZ2twZDN0bmR1Nw==" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios/50/ffffff/instagram.png" alt="Instagram" className="w-10 h-10 mr-4" />
        </a>
      </div>
      <form className="flex flex-col space-y-4 w-full max-w-md">
        <input 
          type="text" 
          placeholder="First Name" 
          required
          className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500"
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          required
          className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500"
        />
        <input 
          type="email" 
          placeholder="Email" 
          required
          className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500"
        />
        <input 
          type="text" 
          placeholder="Phone Number" 
          className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500"
        />
        <textarea 
          placeholder="Message" 
          rows="4" 
          required
          className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500"
        />
        <button 
          type="submit" 
          className="py-3 px-6 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
