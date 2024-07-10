import React, { useEffect, useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";
import { useRecoilState } from 'recoil';
import {  pageState } from '../data';
import { useNavigate } from 'react-router';

import Search from './Search';
const Navbar = () => {
    const [show,setShow] = useState(false)
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
            localStorage.clear()
            navigate("/signin")
        }
        
    const [page,setPage] = useRecoilState(pageState)
  return (
    <div className='fixed w-[100vw] z-30'>
        <nav className='flex px-10 items-center relative justify-between h-[9vh]  w-screen backdrop-blur-sm shadow-md'>
            <div className='w-[200px] cursor-pointer ' onClick={()=>{navigate("/")}}>
                <h1 className='text-[2vh]  font-extrabold'onClick={()=>{setPage("Home");setShow(!show)}}>GRACE ATTIRE</h1>
            </div>
            <div className={`md:flex absolute md:static justify-center    text-center w-full left-0 py-6 md:py-0  font-semibold bg-purple-300 md:bg-transparent  text-[1.6vh] top-[7vh] ${show? "translate-y-0": "translate-y-[-50vh] md:translate-y-0 "} transition-all ease-in-out duration-500  gap-6 `}>
                <h2 onClick={()=>{setShow(!show);navigate("/")}} className='mb-4 md:mb-0 cursor-pointer '>Shop</h2>
                <h2 onClick={()=>{setShow(!show);navigate("/men")}} className='mb-4 md:mb-0 cursor-pointer'>Men</h2>
                <h2 onClick={()=>{setShow(!show);navigate("/women")}} className='mb-4 md:mb-0 cursor-pointer'>Women</h2>
                <h2 onClick={()=>{setShow(!show);navigate("/kids")}} className='mb-4 md:mb-0 cursor-pointer'>Kids</h2>
                <h2 onClick={()=>{setShow(!show);navigate("/about")}} className='mb-4 md:mb-0 cursor-pointer'>About Us</h2>
                <h2 onClick={()=>{setShow(!show);navigate("/contact")}} className='cursor-pointer'>Contact</h2>
            </div>
            <div className='mr-6 flex gap-2'>
                <Search />
            </div>
            <div className='flex items-center gap-4  z-10'>
                <IoIosMenu onClick={()=>{setShow(!show)}} className='md:hidden' />
                {
                    localStorage.getItem("token")?
                    <button className='px-8 py-1 w-32 h-9  rounded-lg border' onClick={handleSignOut}>Log Out</button>
                    :
                    <button className='px-8 py-1 w-32 h-9  rounded-lg border' onClick={()=>{navigate("/signin")}}>Login</button>
                }
                <div className='relative' onClick={()=>navigate("/cart")}>
                    <div className='text-white font-bold bg-red-500 w-4 h-5 text-center absolute right-0 top-[-10px]'>{cart.length}</div>
                <TiShoppingCart className='cursor-pointer w-6 h-6' />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar