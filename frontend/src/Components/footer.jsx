
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bottom-0  bg-[#031531] text-white   mb-0 lg:h-96 lg:mt-0">
      <div className="flex flex-col lg:flex-row justify-between p-8 lg:px-32 px-5">
        <div className=" w-full lg:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">GRACE ATTIRE</h1>
          <p className=" text-sm">
            Your all in one solution for clothes shopping.
          </p>
        </div>
        <div>
          <a href="/adminSign">Admin</a>
        </div>
        <div>
         
        </div>
        <div className=" w-full lg:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 lg:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              123 Elm Street, Suite 456 Springfield, IL 62701 United States
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              support@care.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +123-456-7890
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
