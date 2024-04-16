import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';

const MenSection = () => {
  const [clothes_data,setClothesData] = useState([]);
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(10)

async function servercall(){
  const response =  await axios.get("https://dummyjson.com/products")
  setClothesData(response.data.products)
  console.log(clothes_data)
}
const length = clothes_data.length()
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
      <div>
        {
          ...Array(length).map((index)=>{
            <div>
              
            </div>
          })
        }
      </div>
    </div>
    </div>
  )
}

export default MenSection