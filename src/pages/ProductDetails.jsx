import React from "react";
import { useStatusContext } from "../context/ContextProvider";
const ProductDetails = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div
      className={`${
        activeMenu ? "ml-72" : "w-full"
      }  mt-4 flex justify-center gap-1 `}
    >
      <div className="w-full flex justify-center ">
        <div className="w-[95%]  p-8 rounded-xl bg-white border-gray-dark shadow-2xl">
          <h2 className="text-2xl border-b-2 border-b-gray-medium  pb-4 font-extrabold text-black ">
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
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Product Name:
                  </span>
                  <span className="text-gray-dark">snow</span>
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Category:
                  </span>
                  <span className="text-gray-dark">Drinks</span>
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Product Type:
                  </span>
                  <span className="text-gray-dark">Grocery</span>
                </p>
              </div>
              <div className="w-[100%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Product Description:
                  </span>
                  <div className="text-gray-dark">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit, quo?
                  </div>
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Unit(kg):
                  </span>
                  <span className="text-gray-dark">2</span>
                  <span className="text-gray-dark">2</span>
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Product Quantity:
                  </span>
                  <span className="text-gray-dark">2</span>
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Product Price:
                  </span>
                  <span className="text-gray-dark">200</span>
                </p>
              </div>
              <div className="w-[50%]  mb-1">
                <p className="text-xl font-semibold text-gray-500  p-2">
                  <span className="mr-2  text-xl font-extrabold text-gray-medium">
                    Sale Price:
                  </span>
                  <span className="text-gray-dark">100</span>
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
