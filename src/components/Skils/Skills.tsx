import React from "react";
import { VelocityScroll } from "../ui/scroll-based-velocity";

const Skills = () => {
  return (
    <div className="md:mt-[105px] mt-10 px-1">
      <div className="rotate-[-4deg]">
        <VelocityScroll
          text="JavaScript | TypeScript | Tailwindcss | Shadcn UI | Magic UI React | Next.js | Node.js | Express.js | MongoDB | MYSQL | POSTGRESQL | Mongoose | Prisma |"
          default_velocity={3}
          className="font-display bg-[#f35034] text-center text-xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-2xl md:font-medium md:leading-[5rem] px-4 transform py-4 md:py-0"
        />
      </div>
    </div>
  );
};

export default Skills;
