import React from "react";
import { useStatusContext } from "../context/ContextProvider";
const EditProfile = () => {
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
      <div className="w-full flex justify-center m-4 bg-white">
        <form
          className="p-8 w-full rounded-xl border-gray-dark shadow-2xl"
          onSubmit={handleForm}
        >
          <h2 className="text-2xl border-b-2 border-b-gray-medium  pb-4 font-extrabold text-black">
            Edit Profile
          </h2>
          <div className="flex w-full justify-between">
            <div className="w-[50%]  mb-1 ">
              <label htmlFor="updateImage">
                <div className="w-full mt-4 ">
                  <img
                    className="rounded-full border-2 border-black cursor-pointer"
                    src="default.png"
                    alt="customer profile"
                  />
                </div>
              </label>
              <input type="file" id="updateImage" className="hidden" />
            </div>
            <div className="flex flex-col w-full mt-1">
              <div className="w-full mb-4">
                <label
                  htmlFor="username"
                  className="text-xl font-extrabold text-gray-medium"
                >
                  Username
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  type="text"
                  id="username"
                  value={"snow"}
                  onChange={() => {}}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  className="text-xl font-extrabold text-gray-medium"
                  htmlFor="age"
                >
                  Age
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  type="text"
                  id="age"
                  value={26}
                  onChange={() => {}}
                />
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="email"
                  className="text-xl font-extrabold text-gray-medium"
                >
                  Email
                </label>
                <input
                  className="border outline-none w-full text-xl font-semibold text-gray-dark rounded-lg p-2"
                  type="text"
                  disabled
                  id="email"
                  value={"example@gmail.com"}
                  onChange={() => {}}
                />
              </div>
              <div>
                <button className="rounded-lg py-4 px-8 bg-sky-400 bg-blue-light text-white hover:bg-blue text-xl">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
