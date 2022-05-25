import React, { useState } from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../../application/constants/AppRoutes";
import Logo from "../../../assets/image/UpHire-Logo.png";
import { HiOutlineMenuAlt3, HiPlusCircle, HiXCircle } from "react-icons/hi";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  const menuItems = [
    {
      name: APP_ROUTES.HOME,
      label: "Home",
      isExternal: true,
    },
    {
      name: APP_ROUTES.ABOUT,
      label: "About UpHire",
      isExternal: true,
    },
    {
      name: APP_ROUTES.WORKS,
      label: "How It Works",
      isExternal: true,
    },
    {
      name: APP_ROUTES.CONTACT,
      label: "Contact Us",
      isExternal: true,
    },
  ];

  const handleMenu = () => {
    setMenuClick(!menuClick);
  };

  return (
    <div className="shadow-sm sticky w-[100%] font-bold font-sans">
      <div className="flex items-center justify-between max-w-[90%] xl:max-w-[80%] mx-auto py-2 text-sm">
        {/* Logo */}
        <div className="">
          <img src={Logo} />
        </div>
        {/* Nav Items */}
        <div className="hidden md:flex items-center space-x-6 xl:space-x-12 uppercase font-sans">
          <div className="flex items-center justify-around  space-x-4 xl:space-x-6">
            {menuItems.map((item, index) => (
              <a key={`header-${index}`} href={item.name}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center xl:px-4 space-x-10">
            <Link to="/login" className="">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#0FA24E] hover:bg-green-700 text-white py-3 px-6 rounded"
            >
              SignUp
            </Link>
          </div>
        </div>
        {/* <div className="flex md:hidden">
          <HiOutlineMenuAlt3
            onClick={handleMenu}
            className={`h-10 w-10 cursor-pointer rounded-full ${
              menuClick ? "hidden" : ""
            }`}
          />
          <HiXCircle
            onClick={handleMenu}
            className={`h-10 w-10 cursor-pointer rounded-full z-50 ${
              menuClick ? "" : "hidden"
            }`}
          />
        </div> */}
        {/* <div
          className={`${
            menuClick ? "flex" : "hidden"
          } transition duration-700 absolute z-10 top-0 left-0 bg-[#49b478] right-0 ease-in-out flex-col justify-center items-center space-y-5 py-10 text-center `}
        >
          {menuItems.map((item, index) => (
            <a key={`header-${index}`} onClick={handleMenu} href={item.name}>
              {item.label}
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
