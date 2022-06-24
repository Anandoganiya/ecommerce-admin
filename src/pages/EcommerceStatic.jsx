import React from "react";
import { useStatusContext } from "../context/ContextProvider";

const EcommerceStatic = () => {
  const { activeMenu, setActiveMenu } = useStatusContext();
  return (
    <div className={`${activeMenu ? "ml-72" : "w-full"}`}>EcommerceStatic</div>
  );
};

export default EcommerceStatic;
