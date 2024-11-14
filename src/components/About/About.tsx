import React from "react";
import myImage from "../../static/images/ji.png";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-28 px-4 sm:px-0">
      <div className="flex sm:flex-row flex-col gap-10 ">
        <div className="bg-[#1f1f1f] px-8 rounded-md border border-gray-800">
          <Image src={myImage} alt="my image" width={1200} height={1200} />
        </div>
        <div className="flex relative flex-col gap-2 bg-[#1f1f1f] sm:p-8 p-5 rounded-md border border-gray-800 overflow-hidden sm:overflow-clip">
          <h1 className="text-3xl text-[#f35034]">About Me</h1>
          <p className="text-[#c3bfbf] text-[15px] ">
            As a front-end developer, I can play an important role in creating
            attractive, user-friendly interfaces that bring websites to life. My
            skills in HTML, CSS, JavaScript, TypeScript, and React are the
            building blocks that transform design ideas into interactive and
            visually appealing digital experiences.I am studying in Moulvibazar
            Polytechnic Institute, Department of Computer Science & Technology.
          </p>
          <BorderBeam />
        </div>
      </div>
    </div>
  );
};

export default About;
