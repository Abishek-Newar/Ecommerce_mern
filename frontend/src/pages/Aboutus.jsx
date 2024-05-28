import React from 'react'
import { About } from '../data'

const Aboutus = () => {
  return (
    <div className='bg-gradient-to-b min-h-screen mb-12 from-purple-300 to-white'>
         <h1 className='pt-[10vh] text-center text-5xl font-bold mb-16 '>About Us</h1>
         <p className='mx-auto w-[60%] mb-12 font-semibold  pb-6'>{About.Aboutus}</p>
       <div className='  flex flex-col   w-[70%] mx-auto '>
        <h1 className='text-3xl font-bold text-center'>Our story</h1>
        <p className='  -l-2 pl-6'>{About.ourstory}</p>
       </div>
       <div className='  mb-10  flex flex-col gap-4 md:gap-0     mt-10 w-[70%] mx-auto'>
       <h1 className='  text-3xl  font-bold text-center  '>What We Offer</h1>
        <div className='pl-6'>
            {About.whatweoffer.map((item,index)=>(
                <p key={index} >{item}</p>
            ))}
        </div>
       </div>
       <div className='w-[70%] flex flex-col gap-4       mx-auto'>
        <h1 className='text-3xl font-bold text-center '>Our Vision</h1>
        <p className='  -l-2 pl-6'>{About.ourvision}</p>
       </div>
    </div>
  )
}

export default Aboutus