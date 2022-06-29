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
      <div className="w-full flex justify-center bg-white">
        <div className="w-[70%]  rounded-xl border-gray-dark shadow-2xl  p-8">
          <h2 className="text-2xl border-b-2 border-b-gray-medium  pb-4 font-extrabold text-black ">
            Customer Details
          </h2>
          <div className="flex w-full justify-evenly items-center">
            <div>
              <div className="w-[20rem]  mb-1">
                <div className="w-full mt-4 ">
                  <img
                    className="rounded-full border-2 border-black w-full"
                    src="default.png"
                    alt="customer profile"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Username:
                  </span>
                  snow
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Status:
                  </span>
                  Active
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Age:
                  </span>
                  26
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Email:
                  </span>
                  example@gmail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
