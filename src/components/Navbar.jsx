import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-orange-400  text-white flex justify-between items-center px-9 py-4 my-1 mx-1">
        <div className='logo font-bold '>
            Logo hun
        </div>
        <div className='flex space-x-4 '>
            <a className = " hover:font-bold" href="/">Home</a>
            <a className = " hover:font-bold" href="#">Product</a>
            <a className = " hover:font-bold" href="/">Contact Us</a>

        </div>


    </nav>
  )
}

export default Navbar
