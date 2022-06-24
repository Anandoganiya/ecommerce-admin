import React from "react";
import { Sidebar, Navbar } from "../components";
import { useStatusContext } from "../context/ContextProvider";

const DashBoard = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div className="flex">
      {activeMenu ? (
        <div className="w-72 h-screen fixed bg-slate-100">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0">sidebar</div>
      )}
      <div className={`w-full  ${activeMenu ? "md:ml-72" : "flex-2"}`}>
        <div className="fixed w-full bg-slate-200 md:static">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
