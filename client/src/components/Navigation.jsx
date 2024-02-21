import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faEdit,
  faCreditCard,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    // userContext.setAuthenticated(false);
    // userContext.setCurrentUser(null);
    navigate("/");
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    console.log("Clicked outside");
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed z-30 w-full border-0 border-transparent">
      <nav
        id="header"
        className="w-full z-30 top-0 text-white bg-transparent border-0 border-transparent"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 border-0 border-transparent">
          <div className="flex items-center">
            <Link
              to="/"
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex"
            >
              <div className="mr-2">
                <img src="../../dumble.png" alt="logo" className="h-14 w-14" />
              </div>

              <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 pt-4">Fitness First</div>
            </Link>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center mt-3">
              {user?.name ? (
                <>
                  <li className="mr-3">
                    <span className="font-bold text-white">
                      Welcome, {user?.name}!
                    </span>
                  </li>
                  <li className="mr-3">
                    <Link
                      to="/"
                      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 no-underline hover:text-pink-400 hover:text-underline py-2 px-4"
                      href="#"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="mr-3">
                    <Link
                      to="/"
                      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 no-underline hover:text-pink-400 hover:text-underline py-2 px-4"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <button
                      id="navAction"
                      onClick={handleButtonClick}
                      className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    >
                      {user?.name ? "Log Out" : "Sign In"}
                    </button>
                  </li>
                  <li className="mr-3 absolute right-20">
                    <div className="relative">
                      <button
                        id="nav-toggle"
                        onClick={handleButtonClick}
                        className="flex items-center p-2 rounded-full border-2 text-xl border-white text-pink-800 hover:text-pink-400 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ color: "#ffffff" }}
                        />
                      </button>
                      {isDropdownOpen && (
                        <div
                          ref={dropdownRef}
                          className="absolute top-10 right-0 bg-white border-2 border-white rounded-md shadow-md w-48 p-2"
                        >
                          <button className="block w-full text-left py-2 px-4 hover:bg-gray-200">
                            <FontAwesomeIcon icon={faCog} className="mr-2" />{" "}
                            Settings
                          </button>
                          <Link to="/editProfile">
                            <button className="block w-full text-left py-2 px-4 hover:bg-gray-200">
                              <FontAwesomeIcon icon={faEdit} className="mr-2" />{" "}
                              Edit Profile
                            </button>
                          </Link>
                          <button className="block w-full text-left py-2 px-4 hover:bg-gray-200">
                            <FontAwesomeIcon
                              icon={faCreditCard}
                              className="mr-2"
                            />{" "}
                            Subscription
                          </button>
                          <button className="block w-full text-left py-2 px-4 hover:bg-gray-200">
                            <FontAwesomeIcon icon={faHeart} className="mr-2" />{" "}
                            Favorites
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="mr-3">
                    <Link
                      to="/register"
                      className="inline-block py-2 px-4 text-white font-bold no-underline"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="mr-3">
                    <Link
                      to="/contact"
                      className="inline-block text-white no-underline hover:text-pink-400 hover:text-underline py-2 px-4"
                      href="#"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="mr-3">
                    <Link
                      to="/"
                      className="inline-block text-white no-underline hover:text-pink-400 hover:text-underline py-2 px-4"
                    >
                      Jobs
                    </Link>
                  </li>

                  <button
                    id="navAction"
                    className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    {user?.name ? (
                      "Log Out"
                    ) : (
                      <Link to="/signin">Sign In</Link>
                    )}
                  </button>
                </>
              )}
            </ul>
          </div>
        </div>
        {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}
      </nav>
    </nav>
  );
};

export default Navigation;
