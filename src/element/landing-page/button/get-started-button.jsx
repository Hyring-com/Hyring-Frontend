import Arrow1 from "@/assets/icons/landing-page/arrow1";
import React from "react";
import BoxTheme from "../box-theme/box-theme";
import { motion } from "framer-motion";

export default function GetStartedButton({ className, boxColor, hover }) {
  return (
    <BoxTheme
      className={`${className} h-[47px] lg:h-[65px] w-fit cursor-pointer`}
      boxStyle={`w-[180px] lg:w-[200px] h-[52px] lg:h-[62px]  border-2 ${boxColor} relative overflow-hidden   rounded-[5px] border-primary-brown 
      before:content-[''] before:w-[237px] before:h-[300px] before:-top-[234px] before:-left-[17px] lg:before:w-[344px] lg:before:h-[379px] 
      before:rounded-[20px] before:absolute lg:before:-top-[284px] lg:before:-left-[36px] before:-z-1 before:bg-primary-orange
       ${hover ? "before:animate-circleFill before:bg-white" : ""}`}
      bgBoxStyle={
        "w-full lg:h-[62px] h-[52px] rounded-[5px] bg-primary-brown  top-1 left-[5px] "
      }
      isButton={true}
    >
      <div className="flex items-center gap-1  ">
        <div className="  font-primaryMedium text-base sm:text-lg  lg:text-xl">Get Started</div>
        <motion.div
           animate={{
            translateX:[0,9,0]
            
           }}
          transition={{duration:1.5,delay:0.3 ,repeat: Infinity ,repeatDelay:0.5 }}><Arrow1 /></motion.div>
      </div>
    </BoxTheme>
  );
}
