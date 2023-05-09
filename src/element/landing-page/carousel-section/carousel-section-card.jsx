import MeshSvg from "@/assets/icons/landing-page/mesh";
import Star1 from "@/assets/icons/landing-page/star1";
import Star2 from "@/assets/icons/landing-page/star2";
import React from "react";
import BoxTheme from "../box-theme/box-theme";

export default function CarouselSectionCard({
  text,
  Svg,
  boxStyleColor,
  starColor1,
  starColor2,
  starColor3,
  subText,
}) {
  return (
    <BoxTheme
      top="8px"
      left="7px"
      className={
        "h-[196px] sm:h-[251px] md:h-[310px] lg:h-[323px] xxxl:h-[450px] w-fit  cursor-pointer m-auto"
      }
      boxStyle={` h-[185px] sm:h-[240px] md:h-[300px] lg:h-[312px] xxxl:h-[426px]
                  w-[260px] xxs:w-[300px]  xs:w-[360px] sm:w-[460px] md:w-[580px] lg:w-[700px] xl:w-[950px]  
                   border-2 ${boxStyleColor} rounded-[16px] border-primary-brown`}
      bgBoxStyle={`w-full h-[185px] sm:h-[240px] md:h-[300px] lg:h-[312px]  xxxl:h-[426px]
                    rounded-[16px]  bg-primary-brown  `}
    >
      <div className="flex  items-center justify-between w-full gap-1 md:gap-4 p-2 md:p-5">
        <div className="basis-4/5">
          <div className="relative flex">
            {/* <Star2
              className={`scale-[0.45] xs:scale-[0.5] md:scale-[0.8] lg:scale-[1] ${starColor1}`}
            />
            <Star1
              className={`ml-6 -mt-6 md:ml-9 md:-mt-4 scale-[0.45] md:scale-[0.8] lg:scale-[1]  ${starColor2}`}
            /> */}
            <div className="text-base xxs:text-xl xs:text-2xl sm:text-3xl md:text-[40px] lg:leading-[50px] lg:text-[46px] font-primary mt-3">
              {text}
            </div>
          </div>
          <div className="text-xs xxs:text-l xs:text-l sm:text-l md:text-[20px] lg:leading-[35px] lg:text-[24px] font-primary mt-3">
            {subText}
          </div>
        </div>
        <div className="basis-2/5">
          <div className="relative flex items-center  justify-center scale-[0.35] md:scale-[0.6] lg:scale-[1] ">
            <MeshSvg className="absolute z-[10]" />
            <div className="absolute z-[20]">{Svg}</div>
            <Star2
              className={`absolute z-[30]  top-[70px] -left-[70px] lg:top-[80px] lg:left-[0px] fill-custom-red animate-scaleIn`}
            />
            <Star2
              className={`absolute z-[30] -top-[120px] -right-[60px] lg:-top-[130px] lg:right-[0px] ${starColor3} animate-scaleOut`}
            />
          </div>
        </div>
      </div>
    </BoxTheme>
  );
}
