import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '../data'
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router';
const Cart = () => {
  const navigate = useNavigate();
  const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")))
  const [price,setPrice] = useState(0)
  useEffect(()=>{
    async function serverCall(){
      await axios.get("https://dummyjson.com/products")
      .then((response)=>{

      })
      console.log(cart)

    }
    serverCall()
  },[])
  useEffect(()=>{
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    setPrice(totalPrice);
    },[cart]);
    function removeCart(id){
      const newcart = cart.filter((item)=>item._id != id);
      setCart(newcart)
      localStorage.setItem("cart", JSON.stringify(newcart))
    }
  return (
    <div className=' min-h-screen'>
      <div className='pt-[9vh] min-h-[100%] grid xl:grid-cols-2 grid-cols-1'>
        <div className='  flex flex-col gap-6 justify-center items-center'>
          <h1 className=''>Items</h1>
          {
            cart.map((item,index)=>(
              <div key={index} className='border w-[70%] overflow-hidden flex justify-between items-center px-4 h-24 '>
                <img src={item.image} className='w-24 h-auto p-1' alt="" />
                <h1>{item.title}</h1>
                <h2>{item.price}</h2>
                <MdDelete onClick={()=>{removeCart(item._id)}} className='text-red-600 size-6 cursor-pointer' />
              </div>
            ))
          }
        </div>
        <div className='border-l flex gap-6 flex-col items-center w-full'>
           <h1 className='text-center text-2xl font-bold'>Total:</h1>
           <h2 className='text-center text-3xl font-bold'>${price}</h2>
           <button onClick={()=>{navigate("/complete")}} className='text-2xl px-4 py-1 rounded-md bg-black text-white '>Buy Now</button>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Cart