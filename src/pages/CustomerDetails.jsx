import React from "react";
import { useStatusContext } from "../context/ContextProvider";
const CustomerDetails = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div
      className={`${
        activeMenu ? "ml-72" : "w-full"
      }  mt-4 flex justify-center  gap-1`}
    >
      <div className="w-full flex justify-center">
        <div className="border w-[70%]  rounded shadow p-8">
          <h2 className="text-2xl border-b pb-4 font-extrabold text-black">
            Customer Details
          </h2>
          <div className="w-[50%]  mb-1">
            <div className="w-full mt-4">
              <img
                className="rounded-full border-2 border-black"
                src="default.png"
                alt="customer profile"
              />
            </div>
          </div>
          <div className="w-[50%]  mb-1">
            <p className="text-xl font-semibold text-gray-500  p-2">
              <span className="text-xl mr-2 font-semibold text-gray-500">
                Username:
              </span>
              snow
            </p>
          </div>
          <div className="w-[50%]  mb-1">
            <p className="text-xl font-semibold text-gray-500  p-2">
              <span className="text-xl mr-2 font-semibold text-gray-500">
                Status:
              </span>
              Active
            </p>
          </div>
          <div className="w-[50%]  mb-1">
            <p className="text-xl font-semibold text-gray-500  p-2">
              <span className="text-xl mr-2 font-semibold text-gray-500">
                Age:
              </span>
              26
            </p>
          </div>
          <div className="w-[50%]  mb-1">
            <p className="text-xl font-semibold text-gray-500  p-2">
              <span className="text-xl mr-2 font-semibold text-gray-500">
                Email:
              </span>
              example@gmail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
