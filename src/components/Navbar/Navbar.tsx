import Image from "next/image";
import logo from "../../static/images/logo.png";
import { BorderBeam } from "../ui/border-beam";
import HyperText from "../ui/hyper-text";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="md:max-w-4xl w-full  mx-auto mt-8 px-2 md:px-0 ">
      <div className="flex items-center sm:gap-5 gap-2">
        <div className="cursor-pointer w-12 h-12 sm:w-14 sm:h-14">
          <Image src={logo} alt="logo" />
        </div>
        <div className=" p-3 bg-[#1F1F1F]  rounded-full flex-1 relative overflow-hidden sm:overflow-clip">
          <div className="flex justify-around items-center">
            <Link href="https://www.facebook.com/">
              <HyperText
                className="sm:text-[15px] text-[13px] uppercase text-[#d7d4d4] cursor-pointer"
                text="Facebook"
              />
            </Link>

            <Link href="www.linkedin.com/in/jahidul-islam-8261a2300">
              <HyperText
                className="sm:text-[15px] text-[13px] uppercase text-[#d7d4d4] cursor-pointer"
                text="Linkedin"
              />
            </Link>
            <Link href="https://github.com/jahidmbpi">
              <HyperText
                className="sm:text-[15px] text-[13px] uppercase text-[#d7d4d4] cursor-pointer"
                text="Github"
              />
            </Link>
          </div>
          <BorderBeam />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
