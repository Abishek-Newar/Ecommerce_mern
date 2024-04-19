import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '../data'

const Cart = () => {
  const [cart,setCart] = useRecoilState(cartState)
  useEffect(()=>{
    async function serverCall(){
      await axios.get("https://dummyjson.com/products")
      .then(()=>{
        setCart(...cart,response.data.products)
      })
    }
    serverCall()
  })
  return (
    <div className='min-h-screen flex justify-center items-center'>Cart

    </div>
  )
}

export default Cart