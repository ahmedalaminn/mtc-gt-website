import React, { useState } from 'react'

const Donate = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState('')

  const handleFirstNameChange = event => {
    setValues({...values, firstName: event.target.value})
  }

  const handleLastNameChange = event => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailChange = event => {
    setValues({...values, email: event.target.value})
  }

  // need to choose some sort of payment system compatible with our backend stack, i know stripe works with express but not sure if we use a python backend how it would work
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.firstName || !values.lastName || !values.email) {
      setSubmitted("Please fill in all the fields.");
    }
    else {
      setSubmitted("Thank you for your donation :)")
    }

    // backend logic 
  }

  return (
    <div className = "h-dvh bg-gray-900 text-white p-6"> 
      <h2 className = "text-4xl font-bold mb-6 text-center"> Donate </h2>

      <form onSubmit = {handleSubmit} className = "flex flex-col space-y-4 items-center">
        <input 
          onChange = {handleFirstNameChange} 
          value = {values.firstName} 
          placeholder = "First Name" 
          name = "firstName"
          className = "p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 w-full max-w-md"
        />
        <input 
          onChange = {handleLastNameChange} 
          value = {values.lastName} 
          placeholder = "Last Name" 
          name = "lastName"
          className = "p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 w-full max-w-md"
        />
        <input 
          onChange = {handleEmailChange}
          value = {values.email} 
          placeholder = "Email" 
          name = "email"
          className = "p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-500 w-full max-w-md"
        />

        <button type = "submit" className = "py-3 px-6 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold"> Submit </button>
      </form>

      {submitted && <p className="mt-4 text-green-500">{submitted}</p>}
    </div>
  )
}

export default Donate
