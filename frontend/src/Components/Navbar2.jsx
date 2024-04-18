import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";
import { useRecoilState } from 'recoil';
import { pageState } from '../data';
const Navbar2 = () => {
    const [show,setShow] = useState(false)
    const [page,setPage] = useRecoilState(pageState)
  return (
    <div className='fixed w-full'>
        <nav className='flex px-10 items-center relative justify-between h-[7vh]  w-screen bg-white shadow-md'>
            <div className='w-[200px]'>
                <h1 className='text-[2vh]  font-extrabold'><a href="/">GRACE ATTIRE</a></h1>
            </div>
            
            <div className='flex items-center gap-6 z-10'>
                <IoIosMenu onClick={()=>{setShow(!show)}} className='md:hidden' />
                <button className='px-8 py-1 rounded-lg border'>Login</button>
                <div>
                <TiShoppingCart />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar2