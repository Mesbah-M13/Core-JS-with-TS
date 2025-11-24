"use client"
import React, { useState } from 'react'

const UserFormData = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender: ''
  })
  return (
    <div className="flex justify-center py-10 bg-black text-white">
      <form className="flex flex-col gap-6 w-[450px]">

        {/* Name */}
        <div className="flex items-center gap-4">
          <label className="w-32 text-right">Name :</label>
          <input
            type="text"
            className="flex-1 bg-black border border-gray-600 p-2 rounded"
          />
        </div>

        {/* Age */}
        <div className="flex items-center gap-4">
          <label className="w-32 text-right">Age :</label>
          <input
            type="number"
            className="flex-1 bg-black border border-gray-600 p-2 rounded"
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <label className="w-32 text-right">Email :</label>
          <input
            type="email"
            className="flex-1 bg-black border border-gray-600 p-2 rounded"
          />
        </div>

        {/* Password */}
        <div className="flex items-center gap-4">
          <label className="w-32 text-right">Password :</label>
          <input
            type="password"
            className="flex-1 bg-black border border-gray-600 p-2 rounded"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex items-center gap-4">
          <label className="w-32 text-right leading-5">
            Confirm<br />Password :
          </label>
          <input
            type="password"
            className="flex-1 bg-black border border-gray-600 p-2 rounded"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <label className="w-32 text-right">Phone :</label>
          <input
            type="text"
            className="flex-1 bg-black border border-gray-600 p-2 rounded"
          />
        </div>

        {/* Gender */}
        <div className="flex items-center gap-4">
          <label className="w-32 text-right">Gender :</label>
          <select className="flex-1 bg-black border border-gray-600 p-2 rounded">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <button className='ml-36 rounded-xl py-2 bg-white text-black w-[100px] '>Sumbit</button>
      </form>
    </div>
  )
}

export default UserFormData