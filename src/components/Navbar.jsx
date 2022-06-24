import React, { useState, useEffect } from "react";
import { useStatusContext } from "../context/ContextProvider";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStatusContext();
  const [toggleNavBtn, setToggleNavBtn] = useState(false);
  return (
    <header className="relative">
      <nav className="flex  justify-between p-2 items-center">
        <div
          className="text-xl cursor-pointer"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          {!activeMenu ? <ImCancelCircle /> : null}
        </div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setToggleNavBtn(!toggleNavBtn)}
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
      {toggleNavBtn ? <NavBtn /> : null}
    </header>
  );
};

const NavBtn = () => {
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
