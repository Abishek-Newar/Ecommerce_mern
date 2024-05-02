import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GiEmptyMetalBucket } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router';
const Cart = () => {
  const navigate = useNavigate();
  const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")))
  const [show,setShow] = useState(false)
  const [price,setPrice] = useState(0)
  
  useEffect(()=>{
    if(localStorage.getItem("cart")){
      setShow(true)
      const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    setPrice(totalPrice);
    }
    
    },[cart]);
    function removeCart(id){
      const newcart = cart.filter((item)=>item._id != id);
      setCart(newcart)
      if(newcart.length === 1){
        localStorage.removeItem("cart")
      }else{
        localStorage.setItem("cart", JSON.stringify(newcart))
      }
    }
    async function order(){
      try{
        const orders = await axios.post("http://localhost:3000/api/user/order",cart,{
          headers:{
            Authorization: localStorage.getItem("token")
          }
        })
        localStorage.removeItem("cart")
        navigate("/complete")
      }catch(error){
        console.log(error);

      }
    }
  return (
    <div className=' min-h-screen'>
      { show?
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
           <button onClick={order} className='text-2xl px-4 py-1 rounded-md bg-black text-white '>Buy Now</button>
        </div>
      </div>
      :
      <div className='flex flex-col h-[100vh] w-full justify-center items-center'>
        <GiEmptyMetalBucket className='w-32 h-32 opacity-15' />
         <h1 className='text-6xl font-bold'>Enter Items to Cart</h1>
      </div>
      }
    </div>
  )
}

export default Cart