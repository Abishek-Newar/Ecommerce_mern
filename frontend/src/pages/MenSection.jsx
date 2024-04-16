import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
const MenSection = () => {
  const [clothes_data,setClothesData] = useState([]);
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(10)

async function servercall(){
  const response =  await axios.get("https://dummyjson.com/products")
  setClothesData(response.data.products)
}
const length = Math.ceil(clothes_data.length /10);
console.log(length)
useEffect(()=>{
  servercall()
},[])
  return (
    <div>
      <h1 className='pt-[9vh] text-4xl font-bold text-center uppercase mb-24'>Men's Clothing</h1>
      <div className='flex flex-wrap justify-center gap-10'>
      {
        clothes_data.map((item,index)=>(
          <Card props={item} />
        ))
      }
      </div>
      <div className='flex justify-center gap-6 py-24 items-center '>
        <MdNavigateBefore className='w-10 h-10' />
        {
          [...Array(length)].map((_,index)=>(
            <div key={index} className='w-10 h-10 rounded-lg flex cursor-pointer  justify-center items-center border'>
              {index+1}
            </div>
          ))
        }
        <MdNavigateNext className='w-10 h-10' />
      </div>
    
    </div>
  )
}

export default MenSection