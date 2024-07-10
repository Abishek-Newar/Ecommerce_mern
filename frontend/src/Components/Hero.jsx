import { Link } from "react-scroll";
import hero from "../assets/hero.png"
import { GrLinkNext } from "react-icons/gr";
import model from "/public/model.avif"
import sky from "/public/sky.jpg"
import sky1 from "/public/sky1.jpg"
const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${model})`,
      };
      const backgroundImageStyle2 = {
        backgroundImage: `url(${sky})`,
      };
      const backgroundImageStyle3 = {
        backgroundImage: `url(${sky})`,
      };
  return (
    <div className="min-h-screen relative ">
        <div className="h-screen w-full grid grid-cols-2 z-0">
            <div className="h-full w-full bg-cover " style={backgroundImageStyle }></div>
            <div className="h-full w-full bg-cover"  style={backgroundImageStyle2 }></div>
        </div>
        <div className="h-screen w-full bg-red-500 absolute z-20 top-0 opacity-10 bg-cover" style={backgroundImageStyle3}></div>
    </div>
  )
}
function H2({desc}){
    return <h1 className="md:text-7xl sm:text-8xl text-[58px] xs:text-7xl font-semibold m-0 ">
        {desc}
    </h1>
}

export default Hero