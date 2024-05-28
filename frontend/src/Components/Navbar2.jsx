import React, { useEffect, useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";
import { useRecoilState } from 'recoil';
import { pageState } from '../data';
import { useNavigate } from 'react-router';
import Search from './Search';
const Navbar2 = () => {
    const [show,setShow] = useState(false)
    const [page,setPage] = useRecoilState(pageState)
    const [cart,setCart] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
      const cartItems = localStorage.getItem("cart")
      if (cartItems) {
          // Parse the cart items from string to array
          setCart(JSON.parse(cartItems));
      }
  },[])
    function handleSignOut(){
      localStorage.clear();
      navigate("/signin")
    }
  return (
    <div className='fixed w-full'>
        <nav className='flex px-10 items-center relative justify-between h-[7vh]  w-screen bg-white shadow-md'>
            <div className='w-[200px]'>
                <h1 className='text-[2vh]  font-extrabold'><a href="/">GRACE ATTIRE</a></h1>
            </div>
            <div className='flex items-center gap-4  z-10'>
            <Search />
                {
                    localStorage.getItem("token")?
                    <button className='px-8 py-1 w-32 h-9  rounded-lg border' onClick={handleSignOut}>Log Out</button>
                    :
                    <button className='px-8 py-1 w-32 h-9  rounded-lg border' onClick={()=>{navigate("/signin")}}>Login</button>
                }
                <div className='relative ' onClick={()=>setPage("cart")}>
                  
                    <div className='text-white font-bold bg-red-500 w-4 h-5 text-center absolute right-0 top-[-10px]'>{cart.length}</div>
                <TiShoppingCart className='cursor-pointer w-6 h-6' />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar2