import React,{useState} from 'react'
import { useNavigate } from "react-router";
import axios from "axios"
const AdminSignin = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState(0)
    async function  serverCalls(){
        try {
            const response = await axios.post("http://localhost:3000/api/admin/",{
            username,
            password
        })
        alert("Appointment Booked")
        navigate("/admin")
        } catch (error) {
            
        }
    }
  return (
    <div className="h-screen  flex items-center justify-center bg-cover bg-[url('assets/img/book.jpg')]" >
        <div className='border flex flex-col gap-6 p-10 w-[600px] rounded-lg'>
            <h1 className='text-3xl font-bold text-center text-white'> Book Appointment</h1>
            <div className='flex gap-4  flex-col'>
            <Labeled title="Username" type="string" placeholder="admin" onChange={(e)=>{setUsername(e.target.value)}} />
            <Labeled title="Password" type="password" placeholder="*******" onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <button onClick={serverCalls} className='w-full h-14 text-white text-xl font-semibold transition-all ease-linear duration-500 rounded-md bg-green-700 hover:bg-green-500'>Book Appointment</button>
        </div>
    </div>
  )
}

function Labeled({title,type,placeholder, onChange}){

    return<>
    <label  htmlFor={title}>
        <h2 className='text-2xl mb-4 font-semi-bold text-white'>{title}</h2>
        <input className='w-full h-12  rounded-md p-3' type={type} placeholder={placeholder} id={title} onChange={onChange} />
    </label>
    </>
}

export default AdminSignin