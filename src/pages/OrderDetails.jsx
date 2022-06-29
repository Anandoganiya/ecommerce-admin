import React from "react";
import { useStatusContext } from "../context/ContextProvider";
import OrderDetailsDataTable from "../components/tables/OrderDetailsDataTable";
const OrderDetails = () => {
  const { activeMenu } = useStatusContext();
  return (
    <div className={`${activeMenu ? "ml-72" : "w-full"}  mt-4 `}>
      <div className="p-8 w-full rounded-xl border-gray-dark shadow-2xl">
        <h2 className="text-xl font-extrabold text-black">INVOICE</h2>
        <p>
          <span className="text-xl font-extrabold text-gray-medium">
            STATUS:
          </span>
          <span className="bg-[#fdba74] p-1 ml-2 text-sm rounded-xl  text-[#c2410c]">
            Pending
          </span>
        </p>
        <div className="flex justify-evenly">
          <div>
            <span className="text-xl font-extrabold text-gray-medium">
              DATE
            </span>
            <div className="text-gray-500 text-lg font-bold">May, 29 2022</div>
          </div>
          <div>
            <span className="text-xl font-extrabold text-gray-medium">
              INVOICE NO:
            </span>
            <div className="text-gray-500 text-lg font-bold">#4343DFD</div>
          </div>
        </div>
        <div className="mt-4">
          <OrderDetailsDataTable />
        </div>
        <div className="flex justify-around mt-4">
          <div>
            <h2 className="text-xl font-extrabold text-gray-medium">
              PAYMENT METHOD
            </h2>
            <p className="text-gray-500 text-lg font-bold">COD</p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-gray-medium">
              SHIPPING COST
            </h2>
            <p className="text-gray-500 text-lg font-bold">$20.00</p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-gray-medium">
              DISCOUNT
            </h2>
            <p className="text-gray-500 text-lg font-bold">$0.00</p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-gray-medium">
              TOTAL AMOUNT
            </h2>
            <p className="text-red text-2xl font-bold">$1601.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
