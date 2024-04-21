import React, { useEffect } from 'react'
import Main from '../Components/Main'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import { useNavigate } from 'react-router'

const MainMode = () => {
    
  return (
    <div>
        <Navbar />
        <Main />
        <Footer />
    </div>
  )
}

export default MainMode