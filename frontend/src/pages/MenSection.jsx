import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Button from '../Components/button';
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';
import bg2 from "/public/bg2.avif";
const MenSection = () => {
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
  backgroundImage: `url(${bg2})`,
};
  return (
    <div>
      <Navbar />
      <div>
      <div className="min-h-[75vh] relative  bg-fixed bg-cover " style={backgroundImageStyle}> 
      </div>
      <div className="w-[20vw] h-32 bg-white absolute left-[38vw] top-[70vh]">
      <h1 className=' text-4xl font-bold text-center uppercase '>Men's Clothing</h1>
      </div>
    </div>
      
      <div className='flex flex-wrap justify-center gap-10 pt-32'>
      {
        clothes_data.map((item,index)=>(
          <div key={index} className={`${index<currentPage? "block": "hidden"} ${item.category === "Men"? "block": "hidden"}`}>
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
      <Footer />
    </div>
  )
}

export default MenSection