import express from "express"
import {z} from "zod"
import jwt from "jsonwebtoken"
import {  User } from "../db.js";
import { SECRET_KEY } from "../data.js";

const adminRouter = express.Router()
const adminValidator  = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})

adminRouter.post("/",async(req,res)=>{
    const body = req.body;
    console.log(body)
    const success = adminValidator.safeParse(body);
    if(!success){
        return res.status(411).json({
            msg: "invalid inputs"
        })
    }
    try{
     const response = await User.findOne({
        email: body.username,
        password: body.password
     })
     console.log(response)
     if(!response || !response.isAdmin){
        return res.status(403).json({msg: "no user found"})
     }
     const token = jwt.sign(response._id.toHexString(),SECRET_KEY)

     return res.json({token: token})
    }catch(error){
        return res.json({
            msg: "error while signing in"
        })
    }


})

export default adminRouter