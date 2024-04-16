import React from 'react'
import { LabeledInput } from './AddProducts'

const Contactus = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-300 to-white'>
      <form className='w-[350px] border p-6 rounded-lg' >
        <h1 className='text-center text-4xl font-bold mb-12'>Contact Us</h1>
        <LabeledInput type="text" placeholder="John Doe" id="name" title="Name" />
        <LabeledInput type="email" placeholder="johndoe@gmail.com" id="email" title="Email" />
        <LabeledInput type="number" placeholder="9876543210" id="phone" title="Phone" />
      </form>
    </div>
  )
}

export default Contactus