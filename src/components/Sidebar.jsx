import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { links } from "../data/links";
import { useStatusContext } from "../context/ContextProvider";
const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStatusContext();
  return (
    <div className="ml-3 pb-10 h-screen border-r border-gray-medium shadow-xl">
      <div className="flex justify-between">
        <Link
          to={"/"}
          onClick={() => {}}
          className="items-center flex gap-3 text-[#1363DF] mt-3 font-extrabold text-xl"
        >
          <BsFillHandbagFill /> <span>ShopMart</span>
        </Link>
        <div
          onClick={() => setActiveMenu(false)}
          className="items-center flex mt-3 font-extrabold text-xl cursor-pointer p-3"
        >
          <button className="hover:bg-gray-light  text-gray-medium transition ease-linear delay-50 p-4 rounded-full">
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      <div>
        {links.map((link) => {
          return (
            <div className="p-1" key={link.title}>
              <p className="mt-3 font-extrabold uppercase text-gray-medium">
                {link.title}
              </p>
              {link.pageLink.map((item) => {
                return (
                  <Link
                    key={item.name}
                    to={`/${item.slugName}`}
                    className="hover:text-white text-gray-dark font-bold text-xl flex items-center space-x-2  p-2 rounded hover:bg-blue-light cursor-pointer"
                  >
                    {item.icon}
                    <span className="">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
