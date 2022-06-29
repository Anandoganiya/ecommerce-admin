import React from "react";
import OrderDataTable from "../components/tables/OrderDataTable";
import { useStatusContext } from "../context/ContextProvider";
const Orders = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div
      className={`${activeMenu ? "ml-72" : "w-full"} mt-4 flex justify-center`}
    >
      <div className="ml-4">
        <h2 className="text-2xl font-extrabold pb-4 text-black">Order</h2>
        <OrderDataTable />
      </div>
    </div>
  );
};

export default Orders;
