import React from "react";
import Img1 from "../../../shared/assets/image/hero-image-1.png";
import Img2 from "../../../shared/assets/image/hero-image-2.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-[100%] py-24">
      <div className="w-[100%] mx-auto">
        <div className="w-[60%] flex flex-col mx-auto space-y-8">
          <h1 className="text-7xl font-bold text-gray-700">
            Get hired by the popular teams.
          </h1>
          <p className="text-2xl leading-8 w-[80%] text-gray-600">
            Creating a beautiful job website is not easy always. To make your
            life easier, we are introducing Justcamp template.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-around space-x-10 w-[100%]">
        <div className="w-[100%] h-[100%]">
          <img src={Img1} className="w-auto h-[100%]" />
        </div>
        <div className="w-[100%] h-[100%]">
          <img src={Img2} className="w-auto h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
