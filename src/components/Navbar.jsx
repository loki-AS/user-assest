import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='flex justify-end'>
    <Link to="/users">
    <h1 className='text-2xl font-poppins uppercase mx-3 lg:mx-20 mt-3 bg-blue-400 py-2 px-4 rounded-md text-white hover:bg-blue-600'>All Users</h1>
    </Link>
    </div>
  )
}

export default Navbar