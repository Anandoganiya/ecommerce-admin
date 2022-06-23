import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib";

export default useAuth = () => {
  const [userAuth, setUserAuth] = useState(
    JSON.parse(localStorage.getItem("userAuth"))
  );
  useEffect(() => {
    const sub = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem("userAuth", JSON.stringify(authUser));
      } else {
        localStorage.removeItem("userAuth");
        setUserAuth(null);
      }
    });
    return () => sub();
  }, [auth]);
  return { userAuth };
};
