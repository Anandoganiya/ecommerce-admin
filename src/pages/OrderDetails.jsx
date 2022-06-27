import React from "react";
import { useStatusContext } from "../context/ContextProvider";
import OrderDetailsDataTable from "../components/tables/OrderDetailsDataTable";
const OrderDetails = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div className={`${activeMenu ? "ml-72" : "w-full"}  mt-4 `}>
      <div className="border p-4">
        <h2 className="font-extrabold text-lg mb-1">INVOICE</h2>
        <p>
          <span className="font-bold text-gray-500 mr-2">STATUS:</span>
          <span className="bg-[#fdba74] p-1 text-sm rounded-xl  text-[#c2410c]">
            Pending
          </span>
        </p>
        <div className="flex justify-evenly">
          <div>
            <span className="font-semibold text-lg ">DATE</span>
            <div className="text-gray-500 text-lg font-bold">May, 29 2022</div>
          </div>
          <div>
            <span className="font-semibold text-lg ">INVOICE NO:</span>
            <div className="text-gray-500 text-lg font-bold">#4343DFD</div>
          </div>
        </div>
        <div className="mt-4">
          <OrderDetailsDataTable />
        </div>
        <div className="flex justify-around mt-4">
          <div>
            <h2 className="font-semibold text-lg ">PAYMENT METHOD</h2>
            <p className="text-gray-500 text-lg font-bold">COD</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg ">SHIPPING COST</h2>
            <p className="text-gray-500 text-lg font-bold">$20.00</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg ">DISCOUNT</h2>
            <p className="text-gray-500 text-lg font-bold">$0.00</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg ">TOTAL AMOUNT</h2>
            <p className="text-red-500 text-2xl font-bold">$1601.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
