// UserContext.jsx
import { createContext, useEffect } from "react";
import { useState } from "react";
import { baseURL } from "../config/api.js";
import axios from "../config/axios-auth.js";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState(null);

  const navigate = useNavigate();

  const signUp = async (username, email, password) => {
    try {
      const response = await axios.post(baseURL + `/api/member/register`, {
        username,
        email,
        password,
      });

      if (response.data.success) {
        navigate("/signin");
        console.log("New User==>>", response.data.newUser);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const response = await axios.post(baseURL + `/api/member/login`, {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);

      window.location.replace("/home");
    } catch (error) {
      console.error("Error", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get(baseURL + `/api/member/logout`);
          setUser(response.data);
        } catch (error) {
          console.error(error);
          localStorage.removeItem("token");
          setUser(null);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, signUp, signIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
