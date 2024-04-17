import React from 'react'

const Button = ({onClick}) => {
  return (
    <>
    <button onClick={onClick} className='px-4 py-2 bg-black text-white   rounded-md text-xl font-semibold'>Load More</button>
    </>
  )
}

export default Button