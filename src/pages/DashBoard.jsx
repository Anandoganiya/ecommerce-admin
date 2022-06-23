import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const DashBoard = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <div className="flex">
      {activeMenu ? (
        <div className="w-72 h-screen fixed bg-slate-100">sidebar</div>
      ) : (
        <div className="w-0">sidebar</div>
      )}
      <div className={`w-full  ${activeMenu ? "md:ml-72" : "flex-2"}`}>
        <div className="fixed w-full bg-slate-200 md:static">navbar</div>
      </div>
    </div>
  );
};

export default DashBoard;
