import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Button from '../Components/button';
const KidsSection = () => {
  const [clothes_data,setClothes] = useState([]);
  const [currentPage,setCurrentPage] = useState(10);

  useEffect(()=>{
    async function ServerCall(){
      const response = await axios.get("http://localhost:3000/api/products/getallproducts")
    setClothes(response.data.products)
    }
    ServerCall();
  },[])
const length = clothes_data.length;

  return (
    <div>
      <h1 className='pt-[10vh] text-4xl font-bold text-center uppercase mb-16'>Kids Clothing</h1>
      <div className='flex flex-wrap justify-center gap-10'>
      {
        clothes_data.map((item,index)=>(
          <div key={index} className={`${index<currentPage? "block": "hidden"} ${item.category === "Kids"? "block": "hidden"}`}>
            <Card props={item} />
          </div>
        ))
      }
      </div>
      <div className='flex items-center justify-center py-24'>
      <Button onClick={()=>{
         if(currentPage<length){
          setCurrentPage(currentPage + 10) 
        }
      }} />
      </div>
    </div>
  )
}

export default KidsSection