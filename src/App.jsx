import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import GetUsers from "./components/GetUsers"

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<GetUsers />} />
      </Routes>
    </div>
  )
}

export default App