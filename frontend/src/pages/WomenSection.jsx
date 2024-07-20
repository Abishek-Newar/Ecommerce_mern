import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Button from '../Components/button';
import Navbar from '../Components/Navbar';
import bg4 from "/public/bg4.avif";
const WomenSection = () => {
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
const backgroundImageStyle = {
  backgroundImage: `url(${bg4})`,
};
  return (
    <div>
      <Navbar />
      <div>
      <div className="min-h-[75vh] relative  bg-fixed bg-cover " style={backgroundImageStyle}> 
      </div>
      <div className="w-[25vw] h-32 bg-white absolute left-[38vw] top-[70vh]">
      <h1 className=' text-4xl font-bold text-center uppercase '>Women's Clothing</h1>
      </div>
    </div>
      <div className='flex flex-wrap justify-center mt-32 gap-10'>
      {
        clothes_data.map((item,index)=>(
          <div key={index} className={`${index<currentPage? "block": "hidden"} ${item.category === "Women"? "block": "hidden"}`}>
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

export default WomenSection