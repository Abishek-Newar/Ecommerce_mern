import React from 'react'
import { useNavigate } from 'react-router'

const PurchaseComplete = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center gap-10 min-h-screen'>
        <h1 className='text-9xl font-bold'>Thank You For Purchasing</h1>
        <button onClick={()=>{navigate("/")}} className='text-2xl px-4 py-1 rounded-md bg-black text-white '>Home</button>
    </div>
  )
}

export default PurchaseComplete