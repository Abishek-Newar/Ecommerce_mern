import React from 'react'
import Hero from '../Components/Hero'
import LatestProducts from '../Components/LatestProducts'
import LatestUpdates from '../Components/LatestUpdates'

const LandingPage = () => {
  return (
    <>
    <div id='hero'>
    <Hero/>
    </div>
    <div id='product'>
    <LatestProducts />
    </div>
    <div className='flex flex-col items-center gap-10 my-24'>
      <LatestUpdates />
    </div>
    </>
  )
}

export default LandingPage