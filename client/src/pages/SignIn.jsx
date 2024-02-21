// LoginPage.jsx
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

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
    <div className="min-h-screen bg-gray-600 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md"
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
            className="mt-1 p-2 w-full border rounded-md"
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
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        {/* Submit button */}
        {/* <Link to="/"> */}
        <button
          className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          type="submit"
        >
          Login
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default SignIn;
