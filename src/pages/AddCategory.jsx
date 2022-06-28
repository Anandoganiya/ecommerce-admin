import React from "react";
import { useStatusContext } from "../context/ContextProvider";
import Switch from "@mui/material/Switch";
const AddCategory = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div
      className={`${
        activeMenu ? "ml-72" : "w-full"
      }  mt-4 flex justify-center  gap-1`}
    >
      <div className="w-full flex justify-center m-4">
        <form className="border w-full rounded shadow p-8">
          <h2 className="text-2xl border-b pb-4 font-extrabold text-black">
            Add Category
          </h2>
          <div className="flex w-full justify-between">
            <div className="flex flex-col w-full">
              <div className="w-full mb-4">
                <label
                  htmlFor="categoryName"
                  className="text-xl font-semibold text-gray-500"
                >
                  Category Name
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  type="text"
                  id="categoryName"
                  value={"snow"}
                  onChange={() => {}}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="type"
                  className="text-xl font-semibold text-gray-500"
                >
                  Type
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  type="text"
                  id="type"
                  value={"snow"}
                  onChange={() => {}}
                />
              </div>

              <div className="w-full mb-4">
                <label
                  className="text-xl font-semibold text-gray-500 mb-4"
                  htmlFor="published"
                >
                  Published
                </label>
                <Switch defaultChecked />
              </div>

              <div>
                <button className="rounded-lg py-4 px-8 bg-sky-400 text-semibold text-white text-xl">
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
