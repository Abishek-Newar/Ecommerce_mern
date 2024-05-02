import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../data.js"

export default function Auth (req,res,next){
    const header = req.headers?.authorization
    try{
        const decoded = jwt.verify(header,SECRET_KEY);
        if(decoded){
            req.userId = decoded
            next()
        }
    }catch(error){
        return res.status(403).json({msg: "please log in"})
    }
}