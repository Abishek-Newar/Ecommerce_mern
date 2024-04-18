import express from "express";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import multer from "multer";
import { Product, db, storage } from "../db.js";
const productRouter = express.Router();

const upload = multer({storage: multer.memoryStorage()})
productRouter.post("/",upload.single("filename"),async (req,res)=>{
    const body = req.body;
    try {
        const dateTime = Date.now()
        const storageRef=ref(storage, `EcommerceProducts/${req.file.original + "    " + dateTime}`)
        const metadata = {
            contentType: req.file.mimetype 
        }
        const snapshot = await uploadBytesResumable(storageRef,req.file.buffer,metadata)
        const downloadURL = await getDownloadURL(snapshot.ref)
        console.log("file succesfully uplaodded")
        const response = await Product.create({
            title: body.title,
            description: body.description,
            price: body.price,
            stock: body.stock,
            brand: body.brand,
            category: body.category,
            image: downloadURL
        })
        return res.json({
            msg: "file uploaded",
            name: req.file.originalname,
            downloadURL: downloadURL,
            data: response._id.toHexString()
        })
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            msg: "error while uploading"
        })
    }
})

productRouter.get("/getallproducts", async(req,res)=>{
    try {
        const products = await Product.find({})
         return res.json({products: products})
    } catch (error) {
        return res.status(403).json("error while gettign products")
    }
})

export default productRouter