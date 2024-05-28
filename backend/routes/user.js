import express from "express"
import zod from "zod"
import jwt from "jsonwebtoken"
import {  Contact, Order, User } from "../db.js";
import { SECRET_KEY } from "../data.js";
import Auth from "../Middlewares/AuthMidleware.js";
const userRouter = express.Router();
const signupValidator = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
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
        const token = jwt.sign(response._id.toHexString(),SECRET_KEY)
        return res.json({token: token})

    } catch (error) {
        return res.status(403).json({
            msg: "error while signinig up"
        })
    }
})
const signinValidator = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})
userRouter.post("/signin",async (req,res)=>{
    const body = req.body
    console.log(body)
    const success = signinValidator.safeParse(body)
    console.log(success)
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
        const token = jwt.sign(response._id.toHexString(),SECRET_KEY)
        res.json({
            token: token
        })
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            msg: "error while loggin in"
        })
    }
})

userRouter.post("/contact",async(req,res)=>{
    const body = req.body;
    
    try{
        const response = await Contact.create({
            name: body.name,
            email: body.email,
            phone: body.phone
        })
        return res.json("Our executive wil contact you soon")
    }
    catch(error){
        console.log(error)
        return res.status(403).json({
            msg: "error"
        })
    }
})

userRouter.post("/order", Auth,async(req,res)=>{
    const body = req.body;
    console.log(body)
    try{
        const response = await Order.create({orders: body})
        return res.json({msg: "Order Done"})
    }
    catch(error){
        console.log(error)
        return res.status(403).json({
            msg: "error while adding to cart"
        })
    } 
})





export default userRouter