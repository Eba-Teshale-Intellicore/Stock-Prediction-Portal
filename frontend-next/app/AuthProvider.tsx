"use client";

import { useState, createContext } from "react";

//  create Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggenIn] = useState(
    !!localStorage.getItem("accessToken"),
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggenIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
