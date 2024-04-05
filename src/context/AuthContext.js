"use client";
import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("Huat");
  return <AuthContextProvider value={{ user }}>{children}</AuthContextProvider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
