import React, { createContext, useContext, useEffect, useState } from "react";
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

  const login = async (formData, email) => {
    try {
      const res = await axios.post(`${API_AUTH}login/`, formData);
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);

      setUser(email);
      navigate("/");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const checkAuth = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    try {
      let res = await axios.post(`${API_AUTH}token/refresh/`, {
        refresh: token.refresh,
      });
      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );
      let user = localStorage.getItem("username");
      setUser(user);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
    navigate("/login");
  }

  let value = {
    user,
    error,

    register,
    login,
    logout,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
