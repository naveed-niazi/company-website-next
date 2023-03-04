import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/close.png";
import { Link as MenuLink } from "react-scroll";
import { menuItems } from "./menuItems";
export default function SideNavigation({ navbarOpen, setNavbarOpen }) {
  return (
    <>
      {/* Background Layer When Side Nav is Open */}
      <div
        onClick={() => setNavbarOpen(false)}
        className={`bg-black opacity-20 h-full z-40 w-full fixed ${
          navbarOpen ? "block md:hidden" : "hidden"
        }`}
      ></div>
      {/* Side Navigation Bar */}
      <div
        className={`h-full  ease-in-nav duration-300  bg-white fixed w-0 shadow-leftShadow z-40 md:hidden block top-0 right-0  ${
          navbarOpen ? "w-80" : "w-0 "
        } `}
      >
        <div className="flex px-5 my-7">
          {/* logo of the website*/}
          <div className=" grow ">
            <Image
              priority={true}
              width="140px"
              height="50px"
              src={logo}
              alt="naremis logo"
            />
          </div>
          {/* close nav button */}
          <button type="button" onClick={() => setNavbarOpen(false)}>
            <Image
              width="15px"
              height="15px"
              priority={true}
              src={closeIcon}
              alt="close icon"
            />
          </button>
        </div>
        {/* menu items */}
        <div>
          {menuItems.map(({ path, label }, i) => (
            <MenuLink
              spy={true}
              offset={-60}
              smooth={true}
              key={path}
              onSetActive={(e) => {
                setNavbarOpen(false);
              }}
              duration={0}
              to={path}
              className="text-slate-900 block pl-7 py-4 text-base font-normal "
              activeClass=" bg-gray-100 border-l-4 border-l-orange-400  py-4 pl-6 font-semibold	   "
            >
              {label}
            </MenuLink>
          ))}
        </div>
      </div>
    </>
  );
}
