import React from "react";
import { useStatusContext } from "../context/ContextProvider";
import cardData from "../data/cardData";
import BarGraph from "../components/charts/BarGraph";
import PiGraph from "../components/charts/PiGraph";
import UserTransTable from "../components/tables/UserTransTable";

const EcommerceStatic = () => {
  const { activeMenu } = useStatusContext();
  return (
    <>
      <div
        className={`${
          activeMenu ? "ml-72" : "w-full"
        } flex justify-evenly items-center gap-3 flex-wrap lg:flex-nowrap mt-4`}
      >
        {cardData.map((item) => {
          return (
            <div
              key={item.title}
              className={`rounded-xl ${item.cardWidth} ml-4  text-xl  font-bold p-4 pt-9 border shadow-lg border-gray-light`}
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
                <span className="ml-2 text-green-500">{item.percentage}%</span>
              </p>
              <p className="text-gray-medium">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div
        className={`${
          activeMenu ? "ml-72" : "w-full"
        }  mt-4 flex justify-evenly  gap-1`}
      >
        <div className=" border shadow-xl border-gray-light ml-4">
          <h2 className="text-xl  font-semibold ml-4">Top Selling Products</h2>
          <BarGraph />
        </div>
        <div className="border shadow-xl border-gray-light">
          <h2 className="text-xl  font-semibold ml-4">Top Revenue Products</h2>
          <PiGraph />
        </div>
      </div>
      <div
        className={`${
          activeMenu ? "ml-72" : "w-full"
        } border shadow-xl border-gray-light mx-auto mb-4  mt-4 md:w-[70%]`}
      >
        <div className="ml-4">
          <h2 className="text-xl font-semibold">Recent Order</h2>
          <UserTransTable />
        </div>
      </div>
    </>
  );
};

export default EcommerceStatic;
