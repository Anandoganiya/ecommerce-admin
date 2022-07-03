import React, { useState, useEffect } from "react";
import { useStatusContext } from "../context/ContextProvider";
import cardData from "../data/cardData";
import BarGraph from "../components/charts/BarGraph";
import PiGraph from "../components/charts/PiGraph";
import UserTransTable from "../components/tables/UserTransTable";

const EcommerceStatic = () => {
  const { activeMenu } = useStatusContext();
  const [resize, setResize] = useState(0);
  window.addEventListener("resize", () => {
    setResize(window.innerWidth);
  });

  return (
    <>
      <div
        className={`${
          activeMenu ? "ml-72" : "w-full"
        } flex md:justify-evenly justify-center flex-wrap  items-center sm:gap-3 gap-2  sm:flex-nowrap mt-4`}
      >
        {cardData.map((item) => {
          return (
            <div
              key={item.title}
              className={`rounded-xl bg-white ${item.cardWidth} ml-4 ${item.cardBgImg} text-xl  font-bold p-4 pt-9 border shadow-lg border-gray-light`}
            >
              <button
                className={`p-4 rounded-full ${item.IconColor} text-white  text-2xl`}
              >
                {item.cardIcon}
              </button>
              <p className="mt-3">
                <span className="text-xl font-semibold text-gray-dark">
                  {item.value}
                </span>
                <span className="ml-2 text-green">{item.percentage}%</span>
              </p>
              <p className="text-gray-medium">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div
        className={`${activeMenu ? "ml-72" : "w-full"}  mt-4 flex  ${
          activeMenu ? "justify-start" : "justify-center"
        }  ${resize <= 650 ? "flex-wrap" : "flex-nowrap"}   gap-1 `}
      >
        <div className="ml-4 border shadow-xl border-gray-light  bg-white  ">
          <h2 className="text-xl  font-semibold ml-4">Top Selling Products</h2>
          <BarGraph />
        </div>
        <div className="border shadow-xl border-gray-light bg-white  ">
          <h2 className="text-xl  font-semibold ml-4 ">Top Revenue Products</h2>
          <PiGraph />
        </div>
      </div>
      <div className={`${activeMenu ? "ml-72" : "w-full"} `}>
        <div className="border border-gray-light p-2 bg-white m-4 shadow-xl">
          <h2 className="text-xl font-semibold">Recent Order</h2>
          <UserTransTable />
        </div>
      </div>
    </>
  );
};

export default EcommerceStatic;
