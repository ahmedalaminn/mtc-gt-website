import React from 'react'
import { useState } from 'react'
import validator from 'validator'

// newsletter and inquiry form 
const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  })
  const [emailValid, setEmailValid] = useState(true)
  const [phoneValid, setPhoneValid] = useState(true)

  const onChange = e => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})

    if (name === "email") {
      validateEmail()
    }
    if (name === "phoneNumber") {
      validatePhoneNumber()
    }
  }

  const validateEmail = () => {
    if (!validator.isEmail(form.email)) {
      setEmailValid(false)
    } else {
      setEmailValid(true)
    }
  }

  const validatePhoneNumber = () => {
    if (!validator.isMobilePhone(form.phoneNumber)) {
      setPhoneValid(false)
    } else {
      setPhoneValid(true)
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8000/api/contact'
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-dvh bg-gray-900 text-white pt-32 pb-16 px-4 sm:px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Thank you for your interest in MTC at Georgia Tech! If you have any inquiries or would like to stay updated on our latest projects and events, please feel free to contact us.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://www.instagram.com/mtcgatech/profilecard/?igsh=MWdiZ2twZDN0bmR1Nw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <img src="https://img.icons8.com/ios/50/ffffff/instagram.png" alt="Instagram" className="w-12 h-12" />
          </a>
          <a 
            href="https://wa.me/your-phone-number" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <img src="https://img.icons8.com/ios/50/ffffff/whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
          </a>
        </div>

        {}
        <div> 
          {
            !emailValid ? <p className = "text-red-500 flex justify-center font-bold mb-4"> Invalid Email </p> : null
          }
          {
            !phoneValid ? <p className = "text-red-500 flex justify-center font-bold mb-4"> Invalid Phone Number </p> : null
          }
        </div>

        {/* Contact Form */}
        <form className="max-w-xl mx-auto space-y-6" onSubmit = {handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input 
              name = "firstName"
              onChange = {onChange}
              type="text" 
              placeholder="First Name" 
              required
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all duration-200"
            />
            <input 
              name = "lastName"
              onChange = {onChange}
              type="text" 
              placeholder="Last Name" 
              required
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all duration-200"
            />
          </div>
          <input 
            name = "email"
            onChange = {onChange}
            type="email" 
            placeholder="Email" 
            required
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all duration-200"
          />
          <input 
            name = "phoneNumber"
            onChange = {onChange}
            type="text" 
            placeholder="Phone Number" 
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all duration-200"
          />
          <textarea 
            name = "message"
            onChange = {onChange}
            placeholder="Message" 
            rows="4" 
            required
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 transition-all duration-200 resize-none"
          />
          <button 
            type="submit" 
            className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold text-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
