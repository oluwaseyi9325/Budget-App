import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-blue-600 p-4 flex justify-between items-center '>
      <h4 className='bg-white text-blue-600 p-3 rounded'>Nomands</h4>
      <nav className='flex justify-center gap-5 text-white '>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/signin" className='bg-white text-blue-600 p-2 rounded'>Signin</Link>
        <Link>Signup</Link>
        
      </nav>
    </div>
  )
}

export default Navbar