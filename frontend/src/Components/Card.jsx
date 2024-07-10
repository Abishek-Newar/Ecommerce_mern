import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = (props) => {
  // console.log(props)
  const navigate = useNavigate()
  
  const handleClick = () => {
    console.log(props)
    navigate('/view', { state: { product: props } }); 
  };
  const backgroundImageStyle = {
    backgroundImage: `url(${props.props.image})`,
  };
  return (
    <div onClick={handleClick}  className={`w-[350px] group relative h-[450px] transition-all ease-linear duration-300 bg-cover bg-no-repeat bg-center border pt-6 rounded-xl `} style={backgroundImageStyle} >
        {/* <div className='w-[300px] h-[350px] mx-auto overflow-hidden '>
        <img src={props.props.image} alt="" className='w-[300px] h-auto mx-auto z-1 ' />
        </div> */}
       <div className='absolute left-9 bottom-6 w-[80%] hidden group-hover:block bg-white p-6 rounded-xl transition-all ease-linear duration-300'> 
       <h1 className='uppercase text-xl  text-center mt-3 font-extrabold mb-2 '>{props.props.title}</h1>
        <p className='text-sm text-center font-bold text-gray-600 mb-2'>{props.props.brand}</p>
        <p className='text-2xl font-semibold text-center mb-2'>₹ {props.props.price}</p>
        <button  className=' w-full h-12 bg-gradient-to-tr from-purple-300 to-white border rounded-lg border-purple-500 mt-2'>VIEW</button>
       </div>
    </div>
  )
}

export default Card