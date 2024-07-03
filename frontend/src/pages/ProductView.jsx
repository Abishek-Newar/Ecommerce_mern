import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';

const ProductView = (props) => {
  const navigate = useNavigate()
    const location = useLocation();
    const [cartItems,setCartItems] = useState([]);
    const product  = location.state?.product
    console.log('Location state:', product.props);
    function AddToCart() {
      if(localStorage.getItem("token")){
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
      else{
        navigate("/signin")
      }
  }
  return (
    <>
    <Navbar />
    <div className='min-h-screen xl:grid pt-[10vh] grid-cols-2 '>
        <div className='md:w-[500px]  ml-10 p-6  '>
            <img src={product.props.image} alt="" className='w-full h-auto' />
        </div>
        <div className='flex flex-col gap-8 justify-center p-8'>
        <h1 className='text-2xl font-semibold'>{product.props.title}</h1>
        <h2 className='text-lg font-thin text-gray-400 max-w-[700px]'>{product.props.description}</h2>
        <h3 className='text-3xl font-bold text-center '>${product.props.price}</h3>
        <button onClick={AddToCart} className='bg-black textwhite text-2xl px-4 py-2 text-white rounded-md hover:bg-white border hover:text-black transition-all ease-linear duration-300'>Add to Cart</button>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default ProductView
