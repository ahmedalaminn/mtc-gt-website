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
    <div className = "h-dvh flex flex-col justify-center items-center mb-6 m-10"> 
      <h2 className = "text-4xl font-bold text-white mb-5 "> Donate </h2>

      <form onSubmit = {handleSubmit} className = "flex flex-col">
        <input 
          onChange = {handleFirstNameChange} 
          value = {values.firstName} 
          placeholder = "First Name" 
          name = "firstName"
          className = "p-2 rounded border bg-transparent hover: text-gray-900"
        />
        <input 
          onChange = {handleLastNameChange} 
          value = {values.lastName} 
          placeholder = "Last Name" 
          name = "lastName"
          className = "p-2 rounded border bg-transparent hover: text-gray-900"
        />
        <input 
          onChange = {handleEmailChange}
          value = {values.email} 
          placeholder = "Email" 
          name = "email"
          className = "p-2 rounded border bg-transparent hover: text-gray-900"
        />

        <button type = "submit" className = "p-2 rounded text-white hover:text-gray-400"> Submit </button>
      </form>

      {submitted && <p className="mt-4 text-green-500">{submitted}</p>}
    </div>
  )
}

export default Donate
