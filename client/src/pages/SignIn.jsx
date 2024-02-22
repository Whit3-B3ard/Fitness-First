// LoginPage.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import BackgroundImage from "../images/header.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/member/login",
        { email, password }
      );

      localStorage.setItem("token", response.data.token);
      // localStorage.setItem("userName", response.data.user.name);
      localStorage.setItem("allUserInfo", JSON.stringify(response.data.user));
      console.log("🚀 ~ handleSubmit ~ response:", response.data);
      setUser(response.data.member);
      navigate("/");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ response:", error.message);
      alert(error.response?.data.message || "Login failed ");
    }
  };

  return (
    <div
      className="leading-normal tracking-normal text-white  bg-cover bg-center bg-fixed h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className=" flex flex-col justify-center items-center border-8 rounded-xl h-3/5 w-1/5 shadow-md">
        <form
          onSubmit={handleSubmit}
          className=" p-8 rounded-lg h-full w-full flex flex-col justify-center "
        >
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {/* Email field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>
          {/* Password field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
          </div>
          {/* Submit button */}
          {/* <Link to="/"> */}
          <button
            className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out w-1/3 self-center"
            type="submit"
          >
            Login
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
