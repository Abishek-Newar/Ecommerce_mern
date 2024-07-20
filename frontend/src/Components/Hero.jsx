import bg1 from "/public/bg1.jpeg";
const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bg1})`,
      };
      
  return (
    <div>
      <div className="min-h-screen relative  bg-fixed bg-cover " style={backgroundImageStyle}> 
      </div>
      <div className="w-72 h-32 bg-white absolute left-32 top-[95vh]">

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