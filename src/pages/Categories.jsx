import React from "react";
import { useStatusContext } from "../context/ContextProvider";
import CategoryDataTable from "../components/tables/CategoryDataTable";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
const Categories = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div
      className={`${activeMenu ? "ml-72" : "w-full"} flex justify-center mt-4`}
    >
      <div className="ml-4">
        <div className="flex justify-between w-[550px] mb-4">
          <h2 className="text-2xl font-extrabold text-black">Categories</h2>
          <Link to={"/add-category"}>
            <button className="rounded-lg flex justify-between  gap-1 hover:bg-sky-600 items-center px-4 py-2 bg-sky-500 font-semibold text-lg text-white">
              <BsPlusLg />
              <span>Add Category</span>
            </button>
          </Link>
        </div>
        <CategoryDataTable />
      </div>
    </div>
  );
};

export default Categories;
