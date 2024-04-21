// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { API_KEY, APP_ID, AUTH_DOMAIN, MEASUREMENT_ID, MESSEGING_SENDER_ID, MONGODB_URL, PROJECT_ID, STORAGE_BUCKET } from "./data.js";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import mongoose from "mongoose"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSEGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
mongoose.connect(MONGODB_URL)
.then(()=>{
  console.log("MongoDB Connected")
})
const userSchema = new  mongoose.Schema({
  name: String,
  email: String,
  password: String
})
const adminSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
})
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
  brand: String,
  category: String,
  image: String
})
const Contactus = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
})
const User = mongoose.model("user",userSchema);
const Product = mongoose.model("product",productSchema)
const Admin = mongoose.model("admin",adminSchema)
export const storage = getStorage(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export {User,Product, Admin}
