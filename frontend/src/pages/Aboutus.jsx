import React from 'react'
import { About } from '../data'

const Aboutus = () => {
  return (
    <div className='bg-gradient-to-b from-purple-300 to-white'>
         <h1 className='pt-[8vh] text-center text-5xl font-bold mb-16 '>About Us</h1>
         <p className='mx-auto w-[60%] mb-12 font-semibold'>{About.Aboutus}</p>
       <div className='md:grid flex flex-col grid-cols-2 w-[70%] mx-auto'>
        <h1 className='text-3xl font-bold'>Our story</h1>
        <p>{About.ourstory}</p>
       </div>
       <div className='md:grid mb-10  flex flex-col gap-4 grid-cols-2 mt-10 w-[70%] mx-auto'>
       <h1 className='  text-3xl md:hidden font-bold'>What We Offer</h1>
        <div>
            {About.whatweoffer.map((item,index)=>(
                <p>{item}</p>
            ))}
        </div>
        <h1 className='hidden md:block text-right text-3xl font-bold'>What We Offer</h1>
       </div>
       <div className='w-[70%] flex flex-col gap-4 md:grid grid-cols-2 mx-auto'>
        <h1 className='text-3xl font-bold'>Our Vision</h1>
        <p>{About.ourvision}</p>
       </div>
    </div>
  )
}

export default Aboutus