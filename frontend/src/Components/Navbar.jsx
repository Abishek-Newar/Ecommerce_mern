import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";
import { useRecoilState } from 'recoil';
import { pageState } from '../data';
const Navbar = () => {
    const [show,setShow] = useState(false)
    const [page,setPage] = useRecoilState(pageState)
  return (
    <div className='fixed w-full'>
        <nav className='flex px-10 items-center relative justify-between h-[7vh]  w-screen bg-white shadow-md'>
            <div className='w-[200px]'>
                <h1 className='text-[2vh]  font-extrabold'>GRACE ATTIRE</h1>
            </div>
            <div className={`md:flex absolute md:static justify-center    text-center w-full left-0 py-6 md:py-0  font-semibold bg-sky-600 md:bg-transparent  text-[1.6vh] top-[7vh] ${show? "translate-y-0": "translate-y-[-50vh] md:translate-y-0 "} transition-all ease-in-out duration-500  gap-6 `}>
                <h2 onClick={()=>setPage("Home")} className='mb-4 md:mb-0 cursor-pointer '>Shop</h2>
                <h2 onClick={()=>setPage("men")} className='mb-4 md:mb-0 cursor-pointer'>Men</h2>
                <h2 onClick={()=>setPage("women")} className='mb-4 md:mb-0 cursor-pointer'>Women</h2>
                <h2 onClick={()=>setPage("kids")} className='mb-4 md:mb-0 cursor-pointer'>Kids</h2>
                <h2 onClick={()=>setPage("aboutus")} className='mb-4 md:mb-0 cursor-pointer'>About Us</h2>
                <h2 onClick={()=>setPage("contact")} className='cursor-pointer'>Contact</h2>
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