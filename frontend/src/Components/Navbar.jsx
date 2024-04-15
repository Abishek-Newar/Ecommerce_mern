import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
    const [show,setShow] = useState(false)
  return (
    <div className='fixed w-full'>
        <nav className='flex px-10 items-center relative justify-between h-[7vh]  w-screen bg-white shadow-md'>
            <div className='w-[200px]'>
                <h1 className='text-[2vh]  font-extrabold'>GRACE ATTIRE</h1>
            </div>
            <div className={`md:flex absolute md:static justify-center    text-center w-full left-0 py-6 md:py-0  font-semibold bg-sky-600 md:bg-transparent  text-[1.6vh] top-[7vh] ${show? "translate-y-0": "translate-y-[-50vh] md:translate-y-0 "} transition-all ease-in-out duration-500  gap-6 `}>
                <h2 className='mb-4 md:mb-0 '>Shop</h2>
                <h2 className='mb-4 md:mb-0'>Men</h2>
                <h2 className='mb-4 md:mb-0'>Women</h2>
                <h2 className='mb-4 md:mb-0'>Kids</h2>
                <h2 className='mb-4 md:mb-0'>About Us</h2>
                <h2 className=''>Contact</h2>
            </div>
            <div className='flex items-center gap-6 z-10'>
                <IoIosMenu onClick={()=>{setShow(!show); console.log(show)}} className='md:hidden' />
                <button className='px-8 py-1 rounded-lg border'>Login</button>
                <div>
                <TiShoppingCart />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar