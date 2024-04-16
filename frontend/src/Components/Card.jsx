import React from 'react'

const Card = (props) => {
    console.log(props.props)
  return (
    <div className='w-[350px] h-[400px] border p-6'>
        <img src={props.props.thumbnail} alt="" className='w-[300px] h-[200px] mx-auto' />
        <h1 className='uppercase text-xl text-center mt-3 font-semibold '>{props.props.title}</h1>
        <p className='text-sm text-center font-thin text-gray-600'>{props.props.brand}</p>
        <p className='text-2xl font-semibold text-center'>${props.props.price}</p>
        <button className='w-full h-12 bg-gradient-to-tr from-purple-300 to-white border rounded-lg border-purple-500'>ADD TO CART</button>
    </div>
  )
}

export default Card