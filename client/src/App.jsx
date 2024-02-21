import React, { useContext, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { UserContext } from "./context/UserContext";
import AppStoreImage from "./images/App Store.svg";
import MacbookImage from "./images/macbook.svg";
import PlayStoreImage from "./images/Play Store.svg";
import BackgroundImage from "./images/header.png";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const { user } = useContext(UserContext);
  const [image1Ref, inView1] = useInView({
    triggerOnce: true,
  });

  const [image2Ref, inView2] = useInView({
    triggerOnce: true,
  });

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (inView1 || inView2) {
      setFadeIn(true);
    }
  }, [inView1, inView2]);
  return (
    <>
      <div
        className="leading-normal tracking-normal text-indigo-400  bg-cover bg-center bg-fixed  "
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="h-screen">
          <div
            className=" pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center bg-cover "
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          >
            <div className="relative w-full">
              <video
                className="w-full  object-cover"
                src="/Fitness_First.mp4"
                autoPlay
                loop
                muted
                style={{ height: "800px" }}
              ></video>
              <div className="absolute inset-0">
                <div className="h-full w-full absolute bg-gradient-to-t from-black  to-transparent"></div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden pl-16">
                <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                  Adv
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                    anced
                  </span>
                  <br></br>Fitness Solutions
                </h1>
                <p className="leading-normal text-white text-base md:text-2xl mb-8 text-center md:text-left">
                  The First Ever Application Providing Fully Customizable
                  Training Programs for the Disabled.
                </p>
              </div>

              <div className="w-full xl:w-3/5 p-12 pr-0 overflow-hidden flex justify-end">
                <div
                  ref={image1Ref}
                  className={`${
                    fadeIn ? "fade-in" : "invisible"
                  } transition-opacity duration-4000`}
                >
                  <img
                    className=" w-3/4 fade-in"
                    src="../womanModel.png"
                    alt="Woman Model"
                  />
                </div>
                <div
                  ref={image2Ref}
                  className={`${
                    fadeIn ? "fade-in" : "invisible"
                  } transition-opacity duration-4000`}
                >
                  <img
                    className=" w-3/4 fade-in"
                    src="../manModel.png"
                    alt="Man Model"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              {user?.name ? (
                <Link to="/homepage">
                  <button className="mx-auto lg:mx-0  hover:underline bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    {user?.name ? "Explore" : null}
                  </button>
                </Link>
              ) : null}
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
