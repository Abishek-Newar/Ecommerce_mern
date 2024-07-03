import { FaBell } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { adminState } from "../data";
const Side = () => {
    const [admin,setAdmin] = useRecoilState(adminState)
  return (
    <div className={`w-[13vw] fixed  block font-playwriten z-20 `}>
        <aside className="h-screen border rounded-lg bg-[#222224]">
        <div className="flex items-center justify-between p-6 lg:px-4">
            <div className="flex gap-4 items-center">
            <div className="side-8  md:size-16 text-2xl font-bold flex items-center justify-center text-white bg-[#133E77] rounded-full">A</div>
            <h1 className="text-xs lg:text-sm text-white">Hello, Admin</h1>
            </div>
            <FaBell className="text-white md:text-2xl text-xl" />
        </div>
        <hr />
            <div  onClick={()=>{setAdmin("add")}}  className={`p-6 text-white hover:bg-[#133E77] transition-all ease-linear duration-500`}>
              Add Product
            </div>
            <div  onClick={()=>{setAdmin('all')}}  className={`p-6 text-white hover:bg-[#133E77] transition-all ease-linear duration-500`}>
              AllProduct
            </div>
    </aside>
    </div>
  )
}

export default Side