import React from "react";
import { useStatusContext } from "../context/ContextProvider";
const EditCustomer = () => {
  const { activeMenu } = useStatusContext();
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`${
        activeMenu ? "ml-72" : "w-full"
      }  mt-4 flex justify-center  gap-1`}
    >
      <div className="w-full flex justify-center m-4">
        <form
          className="border w-full rounded shadow p-8"
          onSubmit={handleForm}
        >
          <h2 className="text-2xl border-b pb-4 font-extrabold text-black">
            Edit Customer
          </h2>
          <div className="flex w-full justify-between">
            <div className="w-[50%]  mb-1">
              <div className="w-full mt-4">
                <img
                  className="rounded-full border-2 border-black"
                  src="default.png"
                  alt="customer profile"
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="w-full mb-4">
                <label
                  htmlFor="username"
                  className="text-xl font-semibold text-gray-500"
                >
                  Username
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  type="text"
                  id="username"
                  value={"snow"}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="status"
                  className="text-xl font-semibold text-gray-500 mb-4"
                >
                  Status
                </label>
                <select
                  name=""
                  id="status"
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                >
                  <option value="active">Active</option>
                  <option value="active">Passive</option>
                </select>
              </div>
              <div className="w-full mb-4">
                <label
                  className="text-xl font-semibold text-gray-500 mb-4"
                  htmlFor="age"
                >
                  Age
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  type="text"
                  id="age"
                  value={26}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="email"
                  className="text-xl font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-500 rounded-lg p-2"
                  type="text"
                  disabled
                  id="email"
                  value={"example@gmail.com"}
                />
              </div>
              <div>
                <button className="rounded-lg py-4 px-8 bg-sky-400 text-semibold text-white text-xl">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomer;
