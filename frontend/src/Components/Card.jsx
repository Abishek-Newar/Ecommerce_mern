import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = (props) => {
  // console.log(props)
  const navigate = useNavigate()
  const [cartItems,setCartItems] = useState([]);
  function AddToCart() {
    if (localStorage.getItem("cart")) {
        const cart = JSON.parse(localStorage.getItem("cart")); 
        const itemExists = cart.some((item) => item.id === props.props.id);
        if(itemExists){
          alert("Already added to cart")
        }else{
          cart.push(props.props); 
          setCartItems(cart); 
          localStorage.setItem("cart", JSON.stringify(cart)); 
        }
    } else {
        setCartItems([props.props]); 
        localStorage.setItem("cart", JSON.stringify([props.props])); 
    }
}
  const handleClick = () => {
    navigate('/view', { state: { product: props } }); 
  };
  return (
    <div onClick={handleClick}  className='w-[350px] relative h-[700px] border p-6'>
        <img src={props.props.image} alt="" className='w-[300px] h-auto mx-auto z-1' />
       <div className='absolute bottom-2 w-[80%]'>
       <h1 className='uppercase text-xl text-center mt-3 font-semibold '>{props.props.title}</h1>
        <p className='text-sm text-center font-thin text-gray-600'>{props.props.brand}</p>
        <p className='text-2xl font-semibold text-center'>${props.props.price}</p>
        <button onClick={AddToCart} className='w-full h-12 bg-gradient-to-tr from-purple-300 to-white border rounded-lg border-purple-500'>ADD TO CART</button>
       </div>
    </div>
  )
}

export default Card