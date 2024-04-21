import { Link } from "react-scroll";
import hero from "../assets/hero.png"
import { GrLinkNext } from "react-icons/gr";
const Hero = () => {
  return (
    <div className="h-screen  bg-gradient-to-b from-purple-200 to-white">
        <div className="xl:grid flex items-center h-full w-full justify-center xl:grid-cols-2">
            <div className="flex items-center justify-center ">
                <div>
                <h1>NEW ARRIVALS ONLY</h1>
                <H2 desc="new 👋" />
                <H2 desc="collections" />
                <H2 desc="for everyone" />
                <Link to="product">
                <button  className="bg-red-700 mt-10 rounded-lg border  flex items-center gap-4 hover:bg-red-500 transition-all ease-linear duration-300 px-10 py-2 border-white text-white xs:text-xl md:text-2xl">
                Latest Collection
                    <GrLinkNext />
                    </button>
                </Link>
                </div>
            </div>
            <div className="hidden xl:block ">
                <img src={hero} alt="" className="mx-auto" />
            </div>
        </div>
    </div>
  )
}
function H2({desc}){
    return <h1 className="md:text-9xl sm:text-8xl text-[58px] xs:text-7xl font-semibold m-0 ">
        {desc}
    </h1>
}

export default Hero