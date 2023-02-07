import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_AUTH } from "../../const";

export const authContext = createContext();

export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      console.log(`${API_AUTH}register/`);
      const res = await axios.post(`${API_AUTH}register/`, formData);
      console.log(res);
      navigate("/login");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  let value = {
    user,
    error,

    register,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
