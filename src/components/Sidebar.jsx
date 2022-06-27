import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { links } from "../data/links";
import { useStatusContext } from "../context/ContextProvider";
const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStatusContext();
  return (
    <div className="ml-3 pb-10 h-screen">
      <div className="flex justify-between">
        <Link
          to={"/"}
          onClick={() => {}}
          className="items-center flex mt-3 font-extrabold text-xl"
        >
          <AiOutlineGlobal /> <span>Ecomm</span>
        </Link>
        <div
          onClick={() => setActiveMenu(false)}
          className="items-center flex mt-3 font-extrabold text-xl cursor-pointer p-3"
        >
          <ImCancelCircle />
        </div>
      </div>
      <div>
        {links.map((link) => {
          return (
            <div className="p-1" key={link.title}>
              <p className="mt-3 font-extrabold uppercase">{link.title}</p>
              {link.pageLink.map((item) => {
                return (
                  <Link
                    key={item.name}
                    to={`/${item.slugName}`}
                    className="hover:text-white font-bold flex items-center space-x-2  p-2 rounded hover:bg-sky-500 cursor-pointer"
                  >
                    {item.icon}
                    <span>{item.name}</span>
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
