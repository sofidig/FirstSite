import React from "react";
import Logo from "../../../assets/image/UpHireWhiteLogo.png";

const Footer = () => {
  return (
    <footer className="max-w-[100%] bg-[#1C292E] text-white">
      <div className="max-w-[85%] mx-auto flex flex-col py-10 space-y-4">
        <div className="">
          <div>
            <h1 className="text-4xl font-bold">
              Most comprehensive job portal
            </h1>

            <p className="text-lg text-gray-500">
              We must explain to you how all this mistaken idea of denouncing
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <div>
            <div className="">
              <img src={Logo} />
            </div>
            <div></div>
            <div>Follow us On:</div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
