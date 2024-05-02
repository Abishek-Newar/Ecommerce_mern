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
                <h1 className='text-[2vh]  font-extrabold'><a href="/home">GRACE ATTIRE</a></h1>
            </div>
        </nav>
    </div>
  )
}

export default Navbar2