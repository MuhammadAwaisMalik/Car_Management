import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const value = {
    isLogin,
    setIsLogin,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
