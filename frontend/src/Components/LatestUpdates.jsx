import React from 'react'
import { GrFormNextLink } from "react-icons/gr";
const LatestUpdates = () => {
    function emailUpdates(){
        alert("Exclusive updates will be send on email")
    }
  return (
    <> 
    <h1 className='text-3xl text-center'>GET EXCLUSIVE UPDATES ON EMAIL</h1>
    <div className='flex  gap-2 '>
        <input type="email" className='h-12 w-[700px] border rounded-xl px-4' placeholder='JOhnDoe@gmail.com' />
        <button onClick={emailUpdates} className='h-12 bg-purple-300 w-12 flex items-center justify-center rounded-xl '><GrFormNextLink /></button>
    </div>
    </>
  )
}

export default LatestUpdates