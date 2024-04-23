import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { pageState } from '../data'
import Aboutus from '../pages/Aboutus'
import Cart from '../pages/Cart'
import Contactus from '../pages/Contactus'
import KidsSection from '../pages/KidsSection'
import LandingPage from '../pages/LandingPage'
import MenSection from '../pages/MenSection'
import WomenSection from '../pages/WomenSection'
import { useNavigate } from 'react-router'

const Main = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/")
    }
  },[])
    const [page] = useRecoilState(pageState)
    if(page === 'Home') return <LandingPage />
    if(page === "men")  return <MenSection />
    if(page === "women") return <WomenSection />
    if(page === "kids") return <KidsSection />
    if(page === 'aboutus') return <Aboutus />
    if(page === "contact") return <Contactus />
    if(page === "cart") return <Cart />
  return (
    <LandingPage />
  )
}

export default Main