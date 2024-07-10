// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { API_KEY, APP_ID, AUTH_DOMAIN, MEASUREMENT_ID, MESSEGING_SENDER_ID, MONGODB_URL, PROJECT_ID, STORAGE_BUCKET } from "./data.js";
import { getStorage, ref } from "firebase/storage";
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
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  isSeller: {
    type: Boolean,
    required: true,
  }
})

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
})

const Contactus = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  }
})

const cartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})
const User = mongoose.model("user",userSchema);
const Product = mongoose.model("product",productSchema);
const Cart = mongoose.model("cart",cartSchema);
const Contact = mongoose.model("contact",Contactus);
export const storage = getStorage(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export {User,Product,Contact, Cart}
