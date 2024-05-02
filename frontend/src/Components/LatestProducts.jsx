import axios from "axios";
import { useEffect, useState } from "react"
import Card from "./Card";


const LatestProducts = () => {
  const [clothes,setClothes] = useState([]);
  useEffect(()=>{
    async function ServerCall(){
      const response = await axios.get("http://localhost:3000/api/products/getallproducts")
    
    setClothes(response.data.products)
    }
    ServerCall();
  },[])
  const length = clothes?.length;
  const min = length-6
  return (
    <div className="min-h-screen  mb-10 ">
      <h1 className="text-center mb-10 text-4xl font-bold uppercase">Latest Products</h1>
        <div className="md:w-[70%] flex flex-wrap justify-center  mx-auto  gap-10">
          {
            clothes.map((item,index)=>(
              <div key={index} className={`${index>=min && index<length? "block": "hidden"} `}>
                <Card props={item} />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default LatestProducts