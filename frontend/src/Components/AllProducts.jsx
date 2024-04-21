import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
const AllProducts = () => {
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    async function ServerCall(){
      const response = await axios.get("http://localhost:3000/api/products/getallproducts")
      console.log(response.data.products)
    setCart(response.data.products)
    }
    ServerCall()
  },[])
  return (
    <div className='min-h-screen flex flex-col items-center gap-3 justify-center bg-gradient-to-br from-purple-300 to-white'>
      <h1>All Products</h1>
      {
            cart.map((item,index)=>(
              <div key={index} className='border w-[70%] overflow-hidden flex justify-between items-center px-4 h-24 '>
                <img src={item.image} className='w-24 h-auto p-1' alt="" />
                <h1>{item.title}</h1>
                <h2>{item.price}</h2>
                <MdDelete onClick={()=>{}} className='text-red-600 size-6 cursor-pointer' />
              </div>
            ))
          }
    </div>
  )
}

export default AllProducts