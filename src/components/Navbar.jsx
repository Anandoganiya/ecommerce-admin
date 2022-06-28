import React, { useState, useEffect } from "react";
import { useStatusContext } from "../context/ContextProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked } =
    useStatusContext();
  const [resize, setResize] = useState(undefined);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setResize(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (resize <= 900) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    };
    handleResize();
  }, [resize]);
  return (
    <header className="relative bg-gray-background">
      <nav className="flex justify-between p-2 items-center">
        <div
          className="text-xl cursor-pointer"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          {!activeMenu ? (
            <button className="hover:bg-gray-light  text-gray-medium transition ease-linear delay-50 p-4 rounded-full">
              <AiOutlineMenu />
            </button>
          ) : null}
        </div>
        <div
          className="flex justify-between hover:bg-gray-light transition ease-linear delay-50 p-2 items-center cursor-pointer"
          onClick={() =>
            setIsClicked({ ...isClicked, userProfile: !isClicked.userProfile })
          }
        >
          <div className="w-[2.5rem] mr-3">
            <img
              className="w-full  rounded-full"
              src="/default.png"
              alt="default"
            />
          </div>
          <div className=" font-bold mr-1">Hi, name</div>
          <div className="text-lg ">
            <IoIosArrowDown />
          </div>
        </div>
      </nav>
      {isClicked.userProfile ? <NavMenu /> : null}
    </header>
  );
};

const NavMenu = () => {
  return (
    <div className=" rounded-lg bg-white border-gray-light border absolute w-[14rem] shadow-lg right-0 mr-8 mt-4">
      <div className="hover:bg-gray-light flex items-center gap-2  cursor-pointer border-b border-gray-medium  text-lg w-full bg-slate-300 py-2 px-8 ">
        <CgProfile className="text-2xl" />
        <span>Profile</span>
      </div>
      <div className="hover:bg-gray-light flex items-center gap-2  cursor-pointer border-b border-gray-medium  text-lg w-full bg-slate-300 py-2 px-8 ">
        <FiSettings className="text-2xl" />
        <span>Settings</span>
      </div>
      <div className="hover:bg-gray-light flex items-center gap-2  cursor-pointer  text-lg w-full bg-slate-300 py-2 px-8 ">
        <HiOutlineLogout className="text-2xl" />
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default Navbar;
