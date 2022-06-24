import React, { createContext, useState, useContext } from "react";

const statusContext = createContext(null);
const initialState = {
  userProfile: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  return (
    <statusContext.Provider
      value={{ activeMenu, setActiveMenu, isClicked, setIsClicked }}
    >
      {children}
    </statusContext.Provider>
  );
};

export const useStatusContext = () => useContext(statusContext);
