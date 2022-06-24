import React, { createContext, useState, useContext } from "react";

const statusContext = createContext(null);
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <statusContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </statusContext.Provider>
  );
};

export const useStatusContext = () => useContext(statusContext);
