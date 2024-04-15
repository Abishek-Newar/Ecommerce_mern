import express from "express"
import {z} from "zod"
import jwt from "jsonwebtoken"
import { User } from "../db.js";
import { SECRET_KEY } from "../data.js";
const userRouter = express.Router();
const signupValidator = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6)
})
userRouter.post("/signup",async(req,res)=>{
    const body = req.body;
    const success = signupValidator.safeParse(body)
    console.log(success.success)
    if(!success.success){
        return res.status(403).json({
            msg: "invalid input"
        })
    }
    const check = await User.findOne({
        email: body.email
    })
    if(check){
        return res.status(403).json({
            msg: "user already exist"
        })
    }

    try {
        const response = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            username: body.username,
            email: body.email,
            password: body.password
        })
        const token = jwt.sign(response.id,SECRET_KEY)
        return res.json({token: token})

    } catch (error) {
        return res.status(403).json({
            msg: "error while signinig up"
        })
    }
})

userRouter.post("/signin",async (req,res)=>{
    const body = req.body
    const success = signupValidator.safeParse(body)
    if(!success.success){
        return res.status(403).json({
            msg: "invalid inputs"
        })
    }
    try {
        const response = await User.findOne({
            email: body.email,
            password: body.password
        })
        if(!response){
            res.status(403).json({
                msg: "no users found"
            })
        }
        const token = jwt.sign(response.id,SECRET_KEY)
        return res.json({
            token: token
        })
    } catch (error) {
        return res.status(403).json({
            msg: "error while loggin in"
        })
    }
})




export default userRouter