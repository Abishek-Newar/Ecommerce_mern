import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LabeledInputS } from "./Signin";


export default function Signup(){
    const navigate = useNavigate();
    const [name,setName] = useState(" ");
    const [email,setEmail] = useState(" ");
    const [password,setPassword] = useState(" ");
    const [token,setToken] = useState(" ");

    async function serverCalls(e){
        e.preventDefault()
        try{
            const reponse = await axios.post("http://localhost:3000/api/user/signup",{
                name,
                email,
                password
            })
            navigate("/")
        }
        catch(err){
            console.log(err);
            alert("invalid credentials");
        }

    }

    return <div className=" w-full  h-screen flex justify-center items-center bg-nocap select-none bg-gradient-to-b from-purple-300 to-white">
    <form className=" w-full font-chill max-w-md h-auto rounded-xl p-6 gap-7  flex flex-col items-center border bg-white">
        <h1 className="font-bold text-5xl">SignUp</h1>
        <p className="text-center text-xl p-4 text-nocap font-semibold">Enter your information to create an account</p>
        <div className="w-full max-w-sm flex flex-col gap-3">
        <LabeledInputS type="text" name="Name" placeholder="John Doe" id="name" onChange={(e)=>{setName(e.target.value)}} />
        <LabeledInputS type="email" name="Email" placeholder="johndoe@gmail.com" id="email" onChange={(e)=>{setEmail(e.target.value)}} />
        <LabeledInputS type="password" name="Password" placeholder="******" id="password" onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <div className="w-full p-2 flex flex-col gap-3">
        <button onClick={(e)=>{serverCalls(e)}} className="w-full h-12 bg-purple-300 hover:bg-purple-600 transition-all ease-linear duration-500 rounded-md">Login</button>
        <h3 className="text-center">Already have a account? <Link to="/" className=" underline">Login</Link></h3>
        </div>
        
    </form>
</div>

}