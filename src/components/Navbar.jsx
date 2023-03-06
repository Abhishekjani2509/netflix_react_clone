import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
      <div>
        <button className="bg-white-600 px-4 py-2">Sign In</button>
        <button className="bg-red-600  px-4 py-2">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
