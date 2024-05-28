import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router';
const Search = () => {
    const [search,setSearch] = useState("");
    const [clothes,setClothes] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        async function ServerCall(){
          const response = await axios.get("http://localhost:3000/api/products/getallproducts")
          
        setClothes(response.data.products)
        }
        ServerCall();
      },[])
    function handleSearch(){
        let flag = 0;
        let props = {
            props: {}
        }
        console.log(clothes)
        clothes.forEach((item)=>{
            console.log(item.title === search)
            if(item.title.toLowerCase() === search.toLowerCase()){
                flag = 1;
                props.props = item
            }
        })
        if(flag === 0){
            alert("no items found")
        }else{
            console.log(props)
            navigate('/view', { state: { product: props } });
        }
    }
  return (
    <>
    <input type="text" className='h-10 rounded-2xl border px-4' placeholder='Search' onChange={(e)=>setSearch(e.target.value)} />
    <button onClick={handleSearch}><FaSearch /></button>
    </>
  )
}

export default Search