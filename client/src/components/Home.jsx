import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Home = () => {

    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = () => {
        
        axios.post("https://user-mern.onrender.com", {
            name,
            address
        }).then((response) => {
            setListOfUsers([
                ...listOfUsers,
                {
                    name,
                    address,
                }
            ])
        })

    }

  return (
    <>
    <Navbar />

    <div className='flex flex-col justify-center items-center h-screen'>
    <div className='w-full px-3 lg:px-20'>
    <form className='flex flex-col bg-slate-200 p-6 rounded-md w-full '>
      <label className='text-2xl font-semibold uppercase font-poppins '>User Name</label>
      <input 
      type="text"
      placeholder='user name..'
      className='border py-2 px-4 rounded-md mt-5'
      onChange={(e) => setName(e.target.value)}
      required
      />
      <label className='text-2xl mt-5 font-semibold font-poppins uppercase'>Address</label>
      <input 
      type="text"
      placeholder='address..'
      className='border py-2 px-4 rounded-md mt-5'
      onChange={(e) => setAddress(e.target.value)}
      required
      />
      <button onClick={handleSubmit} className='text-2xl font-poppins uppercase mt-5 bg-blue-400 py-2 px-4 rounded-md text-white hover:bg-blue-600'>Submit</button>
    </form>
    </div>
  </div>
  </>
  )
}

export default Home