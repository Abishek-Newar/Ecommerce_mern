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
    <div className="min-h-screen relative mb-10 ">
        <div className="h-screen w-full grid grid-cols-2 z-0">
            <div className="h-full w-full bg-cover " style={backgroundImageStyle }></div>
            <div className="h-full w-full bg-cover"  style={backgroundImageStyle2 }></div>
        </div>
        <div className="h-screen w-full  absolute z-20 top-0">
          <img src={sky1} alt="" className="w-full h-full opacity-5" />
          <h1 className="absolute top-[85%] left-[22%] font-montserrat  font-extrabold text-7xl"><em>Kapde Chahiye Mil jayenge...</em></h1>
          {/* <h2 className="text-l absolute left-[55%] top-[25%] w-96 ">"Style isn't just about what you wear; it's about how you live. Elevate your life, elevate your style."</h2> */}
          <h2 className="text-lg absolute left-[53%] top-[35%] w-[40%]">"Fashion is more than what you wear—it's how you express yourself to the world. Our clothing isn't just fabric and thread; it's a statement of individuality, confidence, and authenticity. Wear our brand and elevate your everyday moments into extraordinary experiences. Because when you dress well, you live well. Discover your true style with us."</h2>
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