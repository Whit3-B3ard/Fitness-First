import React, { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import AppStoreImage from "./images/App Store.svg";
import MacbookImage from "./images/macbook.svg";
import PlayStoreImage from "./images/Play Store.svg";
import BackgroundImage from "./images/header.png";
import "./App.css";

function App() {
  const { userState } = useContext(UserContext);
  const [counter, setCounter] = useState(0);

  const handleHover = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <>
      <div
        classNameName="leading-normal tracking-normal text-indigo-400  bg-cover bg-center bg-fixed  "
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="h-screen">
          <div className="w-full flex justify-center">
            {userState?.name ? (
              <Link to="/explore">
                <button className="mx-auto lg:mx-0  hover:underline bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  {userState?.name ? "Explore" : null}
                </button>
              </Link>
            ) : null}
          </div>

          <div
            className=" pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center bg-cover "
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          >
            <video
              className="w-full h-1/2 object-cover"
              src="/Fitness_First.mp4"
              autoPlay
              loop
              muted
            ></video>
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden pl-16">
              <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                Adv
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                  anced
                </span>
                <br></br>Fitness Solutions
              </h1>
              <p className="leading-normal text-white text-base md:text-2xl mb-8 text-center md:text-left">
                The First Ever Application Providing Fully Customizable Training
                Programs for the Disabled.
              </p>

              <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-blue-300 py-2 font-bold mb-2"
                    for="emailaddress"
                  >
                    Signup for our newsletter
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    id="emailaddress"
                    type="text"
                    placeholder="you@somewhere.com"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full xl:w-3/5 p-12 overflow-hidden">
              <p className="text-center mt-4 text-white font-extrabold text-3xl">
                Bicep Counter: {counter}
              </p>
              <img
                className="mx-auto w-full md:w-4/5 transform rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:-rotate-6"
                src="../bicep.png"
                alt="Model"
                onMouseEnter={handleHover}
              />
            </div>

            <div className="mx-auto md:pt-16 pb-16">
              <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
                Download our app:
              </p>
              <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in ">
                <img
                  src={AppStoreImage}
                  className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
                />
                <img
                  src={PlayStoreImage}
                  className="h-12 transform hover:scale-125 duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
