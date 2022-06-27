import React from "react";
import { useStatusContext } from "../context/ContextProvider";
const ProductDetails = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div
      className={`${
        activeMenu ? "ml-72" : "w-full"
      }  mt-4 flex justify-center  gap-1`}
    >
      <div className="w-full flex justify-center">
        <div className="border w-[95%]  rounded shadow p-8">
          <h2 className="text-2xl border-b pb-4 font-extrabold text-black">
            Product Details
          </h2>
          <div className="flex w-full justify-between">
            <div className="w-[50%]  mb-1">
              <div className="w-full mt-4">
                <img
                  className="rounded border w-full border-black"
                  src="default.png"
                  alt="customer profile"
                />
              </div>
              <div className="mt-2 flex w-[80%]  justify-between gap-1 items-center ">
                <div className="w-full">
                  <img
                    src="/default.png"
                    alt="product image"
                    className="w-[6rem] cursor-pointer object-cover border border-black rounded h-[4rem]"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/default.png"
                    alt="product image"
                    className="w-[6rem] cursor-pointer object-cover border border-black rounded h-[4rem]"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/default.png"
                    alt="product image"
                    className="w-[6rem] cursor-pointer object-cover border border-black rounded h-[4rem]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="text-xl mr-2 font-semibold text-gray-500">
                    Product Name:
                  </span>
                  snow
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="text-xl mr-2 font-semibold text-gray-500">
                    Category:
                  </span>
                  Drinks
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="text-xl mr-2 font-semibold text-gray-500">
                    Product Type:
                  </span>
                  Grocery
                </p>
              </div>
              <div className="w-[100%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="text-xl mr-2 font-semibold text-gray-500">
                    Product Description:
                  </span>
                  <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit, quo?
                  </div>
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="text-xl mr-2 font-semibold text-gray-500">
                    Unit(kg):
                  </span>
                  2
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="text-xl mr-2 font-semibold text-gray-500">
                    Product Quantity:
                  </span>
                  2
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="text-xl mr-2 font-semibold text-gray-500">
                    Product Price:
                  </span>
                  200
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="text-xl mr-2 font-semibold text-gray-500">
                    Sale Price:
                  </span>
                  100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
