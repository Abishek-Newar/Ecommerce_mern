import { useState } from "react"
import axios from "axios"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import LatestProducts from "./Components/LatestProducts"

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <LatestProducts />
    </>
  )
}

export default App
