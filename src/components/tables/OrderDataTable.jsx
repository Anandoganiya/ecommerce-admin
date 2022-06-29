import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GrFormView } from "react-icons/gr";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const OrderDataTable = () => {
  return (
    <div
      style={{ height: 400, width: 950 }}
      className="rounded-xl border-gray-dark shadow-xl p-4 bg-white"
    >
      <DataGrid
        rows={orderRow}
        columns={orderCol}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};
export default OrderDataTable;
const orderRow = [
  {
    id: "1",
    orderTime: "may 9 2022",
    deliveryAddress: "new york",
    phoneNumber: "9999999999",
    paymentMethod: "COD",
    orderAmount: "$4343",
    status: "Pending",
    action: {
      view: <GrFormView />,
    },
  },
  {
    id: "2",
    orderTime: "may 9 2022",
    deliveryAddress: "new york",
    phoneNumber: "9999999999",
    paymentMethod: "COD",
    orderAmount: "$4343",
    status: "Approved",
    action: {
      view: <GrFormView />,
    },
  },
  {
    id: "3",
    orderTime: "may 9 2022",
    deliveryAddress: "new york",
    phoneNumber: "9999999999",
    paymentMethod: "COD",
    orderAmount: "$4343",
    status: "Rejected",
    action: {
      view: <GrFormView />,
    },
  },
  {
    id: "4",
    orderTime: "may 9 2022",
    deliveryAddress: "new york",
    phoneNumber: "9999999999",
    paymentMethod: "COD",
    orderAmount: "$4343",
    status: "Pending",
    action: {
      view: <GrFormView />,
    },
  },
];

const orderCol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "orderTime", headerName: "Order Time", width: 130 },
  { field: "deliveryAddress", headerName: "Delivery Address", width: 130 },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    type: "number",
    width: 90,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    sortable: false,
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cursor-pointer">
          <Tooltip title="View" placement="right" arrow>
            <IconButton>
              <Link to={"/order-details"}>{params.row.action.view}</Link>
            </IconButton>
          </Tooltip>
        </div>
      );
    },
  },
];
