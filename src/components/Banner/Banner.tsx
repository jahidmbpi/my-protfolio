import IconCloud from "../ui/icon-cloud";
import Particles from "../ui/particles";

const Banner = () => {
  const color = "#ffffff";
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <div className="mt-8 sm:max-w-4xl w-full  mx-auto relative overflow-hidden bg-[#25201f] ">
      <div className="flex px-8 py-1 sm:flex-row flex-col relative items-center sm:items-start justify-around  rounded-md">
        <div className=" mt-8 space-y-3 flex-1">
          <h2
            className="text-[#d7d4d4] cursor-pointer"
            style={{ fontFamily: "cursive" }}
          >
            Hi, I am
          </h2>
          <h1
            className="text-5xl text-[#f35034] font-semibold"
            style={{ fontFamily: "cursive" }}
          >
            Jahidul Islam
          </h1>
          <p className="">
            Welcome to my portfolio! I am Jahidul Islam, <br /> a passionate
            MERN Stack developer <br /> with a strong focus on the Fullstack
            development. <br /> I am always ready to create attractive and
            user-friendly interface.
          </p>
        </div>

        <div className="w-72 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default Banner;
