import express from "express"
import multer from "multer"
import {getStorage, ref, getDownloadURL, uploadBytesResumable} from "firebase/storage"
import { db, storage } from "../db.js"
import { addDoc, collection, getDocs } from "firebase/firestore";
const productRouter = express.Router();

const upload = multer({storage: multer.memoryStorage()})
productRouter.post("/",upload.single("filename"),async (req,res)=>{
    console.log(req.file)
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
        const docRef = await addDoc(collection(db, "products"),{
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
            data: docRef
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
        const getProducts = await getDocs(collection(db,"products"));
    let allProducts = []
    getProducts.forEach((doc)=>{
        const singleData = {
            id: doc.id,
            data: doc.data()
        }
        allProducts.push(singleData)
    })
    return res.json({products: allProducts})
    } catch (error) {
        return res.status(403).json("error while gettign products")
    }
})

export default productRouter