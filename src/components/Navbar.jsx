import React, { useState, useEffect } from "react";
import { useStatusContext } from "../context/ContextProvider";
import { AiOutlineMenu } from "react-icons/ai";

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
    <header className="relative">
      <nav className="flex  justify-between p-2 items-center">
        <div
          className="text-xl cursor-pointer"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          {!activeMenu ? <AiOutlineMenu /> : null}
        </div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() =>
            setIsClicked({ ...isClicked, userProfile: !isClicked.userProfile })
          }
        >
          <div className="w-[4rem] mr-3">
            <img
              className="w-full  rounded-full"
              src="default.png"
              alt="default"
            />
          </div>
          <div className="w-full font-bold">Hi, name</div>
        </div>
      </nav>
      {isClicked.userProfile ? <NavMenu /> : null}
    </header>
  );
};

const NavMenu = () => {
  return (
    <div className=" rounded bg-sky-200 absolute border right-0 mr-8 mt-4">
      <div className="hover:bg-slate-500 cursor-pointer text-lg w-full bg-slate-300 py-2 px-8 border">
        Profile
      </div>
      <div className="hover:bg-slate-500 cursor-pointer text-lg w-full bg-slate-300 py-2 px-8 border">
        Settings
      </div>
      <div className="hover:bg-slate-500 cursor-pointer text-lg w-full bg-slate-300 py-2 px-8 border">
        Signout
      </div>
    </div>
  );
};

export default Navbar;
