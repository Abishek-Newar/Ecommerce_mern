import React, { useEffect, useState } from 'react'
import { cartState } from '../data'
import { useRecoilState } from 'recoil'
import { MdDelete } from "react-icons/md";
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router';
const Cart = () => {
  const navigate = useNavigate()
  const [cart,setCart] = useRecoilState(cartState)
  console.log("cart",cart)
  const [total,setTotal] = useState(0)
  useEffect(()=>{
    let temp = 0;
    cart.forEach(element => {
      temp += element.price
    });
    setTotal(temp)
  },[cart])
  return (
    <>
    <Navbar />
    <div>
      {
        cart.length === 0?
        <>
        Cart is empty
        </>:
        <div className='grid pt-[10vh] grid-cols-2 min-h-screen'>
          <div className='px-24 flex flex-col gap-3'>
            {
              cart.map((item,index)=>(
                <div className='border flex justify-evenly items-center  h-24 p-2  '>
                  <img src={item.image} className='h-20' />
                  <h1>{item.title}</h1>
                  <p>$ {item.price}</p>
                  <MdDelete />
                </div>
              ))
            }
          </div>
          <div className='flex flex-col gap-4'>
            <h1>Total: $ {total}</h1>
            <button onClick={()=>{navigate("/complete")}} className='h-16 w-64 rounded-md bg-blue-400 hover:bg-blue-600 transition-all ease-linear duration-300'>Checkout</button>
          </div>
        </div>
      }
    </div>
    </>
  )
}

export default Cart