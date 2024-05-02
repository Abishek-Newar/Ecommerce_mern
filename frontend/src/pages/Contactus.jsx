import React, { useState } from 'react'
import { LabeledInput } from './AddProducts'
import Button from '../Components/button'

const Contactus = () => {
  const [name,setName]= useState("")
  const [email,setEmail] =  useState("")
  const [phone, setPhone] = useState("")
  async function contact(){
    try {
      const response = await axios.post("http://localhost:3000/api/user/contact",{
        name: name,
        email: email,
        phone: phone
      })
      alert("our Executive will contact you soon")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-300 to-white'>
      <form className='w-[350px] border p-6 rounded-lg' >
        <h1 className='text-center text-4xl font-bold mb-12'>Contact Us</h1>
        <LabeledInput type="text" placeholder="John Doe" id="name" title="Name" onChange={(e)=>{setName(e.target.value)}} />
        <LabeledInput type="email" placeholder="johndoe@gmail.com" id="email" title="Email" onChange={(e)=>{setEmail(e.target.value)}} />
        <LabeledInput type="number" placeholder="9876543210" id="phone" title="Phone" onChange={(e)=>{setPhone(e.target.value)}}/>
        <button type='submit' className='w-full h-12 text-white bg-gradient-to-tr from-purple-400 to-white hover:to-purple-400 transition-all ease-linear duration-500 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Contactus