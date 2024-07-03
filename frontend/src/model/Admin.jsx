import React from 'react'
import Side from '../Components/SideBar'
import AllProducts from '../Components/AllProducts'
import { useRecoilState } from 'recoil'
import { adminState } from '../data'
import AddProducts from '../pages/AddProducts'

const Admin = () => {
  const [admin] = useRecoilState(adminState)
  return (
    <div className='flex '>
      <Side />
      <div className='w-[87vw] ml-[13vw]'>
        {
          admin === "add"? 
          <AddProducts /> :
          <AllProducts />
        }
      </div>
      </div>
  )
}

export default Admin