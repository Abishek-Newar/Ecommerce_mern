import React from 'react'
import Hero from '../Components/Hero'
import LatestProducts from '../Components/LatestProducts'

const LandingPage = () => {
  return (
    <>
    <div id='hero'>
    <Hero/>
    </div>
    <div id='product'>
    <LatestProducts />
    </div>
    </>
  )
}

export default LandingPage