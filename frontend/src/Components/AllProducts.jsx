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
  async function deleteProduct(id){
    console.log(id)
    try {
      const response = await axios.delete("http://localhost:3000/api/products/deleteproduct",{
      data:{
        id: id
      }
    })
    console.log(response)
    alert("Delted successfully")
    } catch (error) {
      console.log(error)
      alert("error while deleting")
    }
  }
  return (
    <div className='min-h-screen flex flex-col items-center gap-3 justify-center bg-[#222224] text-white font-playwriten'>
      <h1 className='text-3xl mb-6 underline underline-offset-4'>All Products</h1>
      {
            cart.map((item,index)=>(
              <div key={index} className='border w-[70%] overflow-hidden flex justify-between items-center px-4 py-2 h-24 '>
                <img src={item.image} className=' w-20 h-auto p-1' alt="" />
                <h1>{item.title}</h1>
                <h2>{item.price}</h2>
                <MdDelete onClick={()=>{deleteProduct(item._id)}} className='text-red-600 size-6 cursor-pointer' />
              </div>
            ))
          }
    </div>
  )
}

export default AllProducts