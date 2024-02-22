import React from "react";
import BackgroundImage from "../images/header.png";
import AppStoreImage from "../images/App Store.svg";
import PlayStoreImage from "../images/Play Store.svg";

export default function Payment() {
  return (
    <div
      className="leading-normal tracking-normal text-indigo-400 h-full bg-cover bg-center bg-fixed flex justify-center items-center flex-col"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className=" px-5 pb-10 pt-16 h-5/6 w-2/5 mt-24">
        <div
          className="w-3/5 mx-auto  rounded-xl border-8 text-white shadow-lg p-5 flex flex-col h-full"
          style={{ maxwidth: "600px" }}
        >
          <div className=" pt-1 pb-5  ">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div className="mb-10 ">
            <h1 className="text-center font-bold text-xl uppercase">
              Secure payment info
            </h1>
          </div>
          <div className="mb-3 -mx-2 flex flex-col">
            <div className="px-2 mb-2">
              <div></div>
              <label for="type1" className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500 "
                  name="type"
                  id="type1"
                  checked
                ></input>
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-8 ml-3"
                ></img>
              </label>
            </div>
            <div className="px-2">
              <label for="type2" className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type2"
                ></input>
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  className="h-8 ml-3"
                ></img>
              </label>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">
                Name on card
              </label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors text-black"
                  placeholder="John Smith"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Card number</label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors text-black"
                  placeholder="0000 0000 0000 0000"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2 text-black">
                <label className="font-bold text-sm mb-2 ml-1 text-white">
                  Expiration date
                </label>
                <div>
                  <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="01">01 - January</option>
                    <option value="02">02 - February</option>
                    <option value="03">03 - March</option>
                    <option value="04">04 - April</option>
                    <option value="05">05 - May</option>
                    <option value="06">06 - June</option>
                    <option value="07">07 - July</option>
                    <option value="08">08 - August</option>
                    <option value="09">09 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                  </select>
                </div>
              </div>
              <div className="px-2 w-1/2 text-black">
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>
            </div>
            <div className="mb-10">
              <label className="font-bold text-sm mb-2 ml-1">
                Security code
              </label>
              <div>
                <input
                  className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors text-black"
                  placeholder="000"
                  type="text"
                />
              </div>
            </div>
            <div>
              <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-24">
        <div className="container flex  justify-end h-1/5">
          <div class="flex flex-wrap ">
            <div class="w-3/6 sm:w-1/2 pt-6 pl-6 flex flex-col justify-center">
              <h3 class="text-3xl text-white text-whitefont-bold leading-none mb-3">
                THE GIFT OF FITNESS
              </h3>
              <p class="text-white mb-8">
                Share the joy of fitness with family and friends
              </p>
              <button className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold rounded-full py-4 px-8 w-1/4 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Learn More
              </button>
            </div>
            <div className="w-full h-full sm:w-1/2 ">
              <img
                className="w-4/6-auto h-full-auto"
                src="https://cdnweb.anghami.com/web/assets/img/landing/card@2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto md:pt-16 pb-16 mt-24">
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
  );
}
