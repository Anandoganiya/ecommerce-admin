import React from "react";
import { useStatusContext } from "../context/ContextProvider";
import ProductDataTable from "../components/tables/ProductDataTable";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
const Products = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div
      className={`${activeMenu ? "ml-72" : "w-full"} flex justify-center mt-4`}
    >
      <div className="ml-4">
        <div className="flex justify-between w-[870px] mb-4">
          <h2 className="text-2xl font-extrabold text-black">Products</h2>
          <Link to={"/add-product"}>
            <button className="rounded-lg flex justify-between  gap-1 hover:bg-sky-600 items-center px-4 py-2 bg-sky-500 font-semibold text-lg text-white">
              <BsPlusLg />
              <span>Add Product</span>
            </button>
          </Link>
        </div>
        <ProductDataTable />
      </div>
    </div>
  );
};

export default Products;
