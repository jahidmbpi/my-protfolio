import React from "react";
import phone from "../../static/images/phone.png";
import email from "../../static/images/message.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="px-4 sm:px-0">
      <div className="w-full h-[2px] mt-32 text-gray-200 "></div>
      <div className="flex sm:justify-center py-8 border-t border-gray-800 text-[#d7d4d4] max-w-6xl mx-auto">
        <div className="flex sm:items-center items-start sm:flex-row flex-col gap-9 sm:gap-14">
          <div className="flex gap-4 items-center">
            <Image src={phone} alt="phone" />
            <div className="space-y-1">
              <h2 className="text-sm">Phone</h2>
              <h2 className="text-[text-18px] font-semibold ">
                +88 01300 109381
              </h2>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={email} alt="email" />
            <div className="space-y-1">
              <h2 className="text-sm">Email</h2>
              <h2 className="text-[text-18px] font-semibold ">
                jahid.redmi10@gmail.com
              </h2>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
