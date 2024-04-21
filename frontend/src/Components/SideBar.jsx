import { FaBell } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { adminState } from "../data";
const Side = () => {
    const [admin,setAdmin] = useRecoilState(adminState)
  return (
    <div className={`w-[30vw] block z-20 `}>
        <aside className="h-screen border   bg-gradient-to-b from-purple-500 to-white">
        <div className="flex items-center justify-between p-6 lg:px-4">
            <div className="flex gap-4 items-center">
            <div className="side-8 md:size-16 text-2xl font-bold flex items-center justify-center text-white bg-purple-950 rounded-full">U</div>
            <h1 className="text-sm lg:text-xl text-white">Hello, User</h1>
            </div>
            <FaBell className="text-white md:text-2xl text-xl" />
        </div>
        <hr />
            <div  onClick={()=>{setAdmin("add")}}  className={`p-6 text-white hover:bg-purple-400`}>
              Add Product
            </div>
            <div  onClick={()=>{setAdmin('all')}}  className={`p-6 text-white hover:bg-purple-400`}>
              AllProduct
            </div>
    </aside>
    </div>
  )
}

export default Side