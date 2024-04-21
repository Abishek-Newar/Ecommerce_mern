import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';

const ProductView = (props) => {
    const location = useLocation();
    const [cartItems,setCartItems] = useState([]);
    const product  = location.state?.product
    console.log('Location state:', product.props);
    function AddToCart() {
      if (localStorage.getItem("cart")) {
          const cart = JSON.parse(localStorage.getItem("cart")); 
          const itemExists = cart.some((item) => item._id === product.props.id);
          if(itemExists){
            alert("Already added to cart")
          }else{
            cart.push(product.props); 
            setCartItems(cart); 
            localStorage.setItem("cart", JSON.stringify(cart)); 
          }
      } else {
          setCartItems([product.props]); 
          localStorage.setItem("cart", JSON.stringify([product.props])); 
      }
  }
  return (
    <>
    <Navbar2 />
    <div className='h-screen gap-6 flex flex-col justify-center items-center'>
        <div className='md:w-[700px] md:h-[500px]  w-full h-auto object-fill p-6 border '>
            <img src={product.props.image} alt="" className='w-full h-full' />
        </div>
        <h1 className='text-2xl font-semibold'>{product.props.title}</h1>
        <h2 className='text-lg font-thin text-gray-400'>{product.props.description}</h2>
        <h3 className='text-3xl font-bold '>${product.props.price}</h3>
        <button onClick={AddToCart} className='bg-black textwhite text-2xl px-4 py-2 text-white rounded-md hover:bg-white border hover:text-black transition-all ease-linear duration-300'>Add to Cart</button>
    </div>
    </>
  )
}

export default ProductView
