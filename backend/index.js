import express from "express"
import cors from "cors"
import productRouter from "./routes/products.js"
import userRouter from "./routes/user.js"
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/products",productRouter)
app.use("/api/user",userRouter)
app.listen(3000,()=>{
    console.log("Port Connected")
})