import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const GetUsers = () => {

  const [listOfUsers, setListOfUsers] = useState([]);

  const getUser = async() => {
    await axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }

  useEffect(() => {
    getUser()
  }, []);

  return (
    <>
    <div className='flex justify-end'>
    <Link to="/">
    <h1 className='text-2xl font-poppins uppercase mx-3 lg:mx-20 mt-3 bg-blue-400 py-2 px-4 rounded-md text-white hover:bg-blue-600'>Home</h1>
    </Link>
    </div>

    <div className='px-3 lg:px-20 py-6'>
      <h1 className='text-3xl font-poppins font-semibold uppercase text-gray-500'>All Users</h1>

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table className="w-full text-lg font-poppins text-left text-gray-500">
        <thead className="text-xl font-poppins text-gray-700 uppercase bg-gray-100">
            <tr className=''>
                <th scope="col" className="px-10 py-3">
                    User Name
                </th>
                <th scope="col" className="px-3 py-3">
                  <div>
                    <h1>Address</h1>
                  </div> 
                </th>
            </tr>
        </thead>
        <tbody>
        {
        listOfUsers.map((u) => {
                return(
                  <tr className='border-b' key={u._id}>
                    <td className='px-10 py-3 capitalize'>{u.name}</td>
                    <td className='px-3 capitalize'>{u.address}</td>
                  </tr>
                )
                })
              }
        </tbody>
    </table>
</div>



    </div>
    </>
  )
}

export default GetUsers