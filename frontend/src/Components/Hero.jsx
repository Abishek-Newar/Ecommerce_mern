import bg1 from "/public/bg1.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bg1})`,
      };
      
  return (
    <div>
      <div className="min-h-screen relative  bg-fixed bg-cover " style={backgroundImageStyle}> 
      </div>
      <div className="w-72 h-24 bg-white absolute left-32 top-[95vh] px-4 flex items-center justify-between text-3xl">
        <h1 className="">Shop Now </h1>
        <FaArrowRight />
      </div>
    </div>
  )
}
function H2({desc}){
    return <h1 className="md:text-7xl sm:text-8xl text-[58px] xs:text-7xl font-semibold m-0 ">
        {desc}
    </h1>
}

export default Hero