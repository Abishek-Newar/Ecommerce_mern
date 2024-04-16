import React from 'react'
import { useRecoilState } from 'recoil'
import { pageState } from '../data'
import Hero from '../Components/Hero'
import MenSection from '../pages/MenSection'
import WomenSection from '../pages/WomenSection'
import KidsSection from '../pages/KidsSection'
import Aboutus from '../pages/Aboutus'
import Contactus from '../pages/Contactus'
import Cart from '../pages/Cart'

const Main = () => {
    const [page] = useRecoilState(pageState)
    if(page === 'Home') return <Hero />
    if(page === "men")  return <MenSection />
    if(page === "women") return <WomenSection />
    if(page === "kids") return <KidsSection />
    if(page === 'aboutus') return <Aboutus />
    if(page === "contact") return <Contactus />
    if(page === "cart") return <Cart />
  return (
    <Hero />
  )
}

export default Main