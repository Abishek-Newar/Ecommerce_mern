import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

 function Signin(){
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function serverCalls(e){
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:3000/api/user/signin",{
                email,
                password
            })
            localStorage.setItem("token",response.data.token)
            navigate("/")
        }catch(err){
            alert("invalid credentials")
            console.log(err)
        }
    }

    return <div className=" w-full  h-screen flex justify-center items-center bg-nocap select-none bg-gradient-to-b from-purple-300 to-white">
    <div className=" w-full font-chill max-w-md h-auto rounded-xl p-6 gap-7  flex flex-col items-center border bg-white">
        <h1 className="font-bold text-5xl">Sign In</h1>
        <p className="text-center text-xl p-4 text-nocap font-semibold">Enter your credentials to access your account</p>
        
        <form className="w-full max-w-sm flex flex-col gap-3 ">
            <LabeledInputS type="email" name="Email" id="email" placeholder="JohnDoe@gmail.com" onChange={(e)=>{
                setEmail(e.target.value)
            }} />
            <LabeledInputS type="password" name="Password" id="password" placeholder="*******" onChange={(e)=>{
                setPassword(e.target.value)
            }} />
            <button onClick={(e)=>{serverCalls(e)}} className="w-full h-12 bg-purple-300 hover:bg-purple-600 transition-all ease-linear duration-500 rounded-md">Login</button>
        <h3 className=" text-center">Don't have a account? <Link to="/signup" className="underline">Sign Up</Link></h3>
        </form>
        
    </div>
</div>
}
export function LabeledInputS({id,name,placeholder,type,onChange}){
    return <label htmlFor={id}>
        <h1 className="font-semibold">{name}</h1>
        <input className="h-12 w-full px-4 border" type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} />
    </label>
}
export default Signin