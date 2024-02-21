import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import AppStoreImage from "../images/App Store.svg";
//import MacbookImage from "../images/macbook.svg";
import PlayStoreImage from "../images/Play Store.svg";
import BackgroundImage from "../images/header.png";
import "../App.css";

function App() {
  const { userState } = useContext(UserContext);
  const [counter, setCounter] = useState(0);

  const handleHover = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <>
      <div
        className="leading-normal tracking-normal text-indigo-400  bg-cover bg-center bg-fixed  "
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="h-screen">
          <div
            className=" pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-col items-center bg-cover "
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          >
            <section class=" py-8 w-full">
              <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                  Pricing
                </h2>
                <div className="w-full mb-4">
                  <div className="h-1 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                  <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-inherit border mt-4">
                    <div class="flex-1 bg-inherit border text-white rounded-t rounded-b-none overflow-hidden shadow">
                      <div class="p-8 text-3xl font-bold text-center border-b-4 bg-gradient-to-r from-purple-500 to-pink-500">
                        Classic
                      </div>
                      <ul class="w-full text-center text-sm">
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> 1 Fitness
                          Centre Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10007;</span> 24/7 Access &
                          Support
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10007;</span> VIP Lounge
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10007;</span> Bar Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10007;</span> Private Coach
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10007;</span> Diet Plan
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10007;</span> Phone App Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10007;</span> Swimming Pool Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10007;</span> Sauna Access
                        </li>
                      </ul>
                    </div>
                    <div class="flex-none mt-auto bg-inherit border rounded-b rounded-t-none overflow-hidden shadow p-6">
                      <div class="w-full pt-6 text-3xl text-white font-bold text-center">
                        £19.99 / Month
                        
                      </div>
                      <div class="flex items-center justify-center">
                        <button class="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-inherit border mt-4 sm:-mt-6 shadow-lg z-10">
                    <div class="flex-1 bg-inherit border rounded-t rounded-b-none overflow-hidden shadow">
                      <div class="w-full p-8 text-3xl text-white bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-center">
                        Fitness Plus
                      </div>
                      <div class="h-1 w-full bg-white  my-0 py-0 rounded-t"></div>
                      <ul class="w-full text-center text-white text-base font-bold">
                      <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Nation Wide 
                          Centres Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> 24/7 Access &
                          Support
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> VIP Lounge
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Bar Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Private Coach
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Diet Plan
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Phone App Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Swimming Pool Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Sauna Access
                        </li>
                      </ul>
                    </div>
                    <div class="flex-none mt-auto bg-inherit border rounded-b rounded-t-none overflow-hidden shadow p-6">
                      <div class="w-full pt-6 text-4xl font-bold text-white text-center">
                        £39.99 / Month
                        
                      </div>
                      <div class="flex items-center justify-center">
                        <button class="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-inherit border mt-4">
                    <div class="flex-1 bg-inherit border text-white rounded-t rounded-b-none overflow-hidden shadow">
                      <div class="p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-3xl font-bold text-center border-b-4">
                        Family Plan
                      </div>
                      <ul class="w-full text-center text-sm">
                      <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Nation Wide 
                          Centres Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> 24/7 Access &
                          Support
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> VIP Lounge
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Bar Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Private Coach
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Diet Plan
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Phone App Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Swimming Pool Access
                        </li>
                        <li class="border-b py-4">
                          {" "}
                          <span className="mr-2">&#10003;</span> Sauna Access
                        </li>
                      </ul>
                    </div>
                    <div class="flex-none mt-auto bg-inherit border rounded-b rounded-t-none overflow-hidden shadow p-6">
                      <div class="w-full pt-6 text-3xl text-white font-bold text-center">
                        £149.99 / Month
                        
                      </div>
                      <div class="flex items-center justify-center">
                        <button class="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex justify-center">
              <div className="flex flex-col w-1/4 xl:w-2/5 justify-center lg:items-start overflow-y-hidden pl-16">
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

              <div className="w-full xl:w-2/5 p-12 overflow-hidden">
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
