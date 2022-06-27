import React from "react";
import CustomerDataTable from "../components/tables/CustomerDataTable";
import { useStatusContext } from "../context/ContextProvider";
const Customers = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div
      className={`${activeMenu ? "ml-72" : "w-full"} mt-4 flex justify-center`}
    >
      <div className="ml-4">
        <h2 className="text-2xl font-extrabold pb-4 text-black">Customers</h2>
        <CustomerDataTable />
      </div>
    </div>
  );
};

export default Customers;
