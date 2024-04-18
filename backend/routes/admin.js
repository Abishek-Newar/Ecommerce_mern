import express from "express"
import {z} from "zod"
import jwt from "jsonwebtoken"
import { User } from "../db.js";
import { SECRET_KEY } from "../data.js";

const adminRouter = express.Router()
const adminValidator  = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})

adminRouter.post("/",async(req,res)=>{
    const body = req.body;
    const success = adminValidator.safeParse(body);
    if(!success){
        return req.status(411).json({
            msg: "invalid inputs"
        })
    }

    
})