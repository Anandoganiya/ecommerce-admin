import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const CustomerDataTable = () => {
  return (
    <div
      style={{ height: 450, width: 800 }}
      className="rounded-xl border-gray-dark shadow-xl p-4 bg-white"
    >
      <DataGrid
        rows={customerRow}
        columns={customerCol}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};
export default CustomerDataTable;

const customerRow = [
  {
    id: 1,
    username: "Snow",
    status: "passive",
    age: 35,
    email: "1sonw@gmail.com",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 2,
    username: "Lannister",
    status: "active",
    age: 42,
    email: "1sonw@gmail.com",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 3,
    username: "Lannister",
    status: "active",
    age: 45,
    email: "1sonw@gmail.com",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 4,
    username: "Stark",
    status: "passive",
    age: 16,
    email: "1sonw@gmail.com",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 5,
    username: "Targaryen",
    status: "active",
    age: null,
    email: "1sonw@gmail.com",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 6,
    username: "Melisandre",
    status: null,
    age: 150,
    email: "1sonw@gmail.com",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 7,
    username: "Clifford",
    status: "passive",
    age: 44,
    email: "1sonw@gmail.com",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 8,
    username: "Frances",
    status: "passive",
    age: 36,
    email: "1sonw@gmail.com",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 9,
    username: "Roxie",
    status: "active",
    age: 65,
    email: "1sonw@gmail.com",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
];

const customerCol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "User Name", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "email",
    headerName: "Email",
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
          <Tooltip title="View" placement="left" arrow>
            <IconButton>
              <Link to={"/customer-details"}>{params.row.action.view}</Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit" placement="top" arrow>
            <IconButton>
              <Link to={"/edit-customer"}>{params.row.action.edit}</Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="right" arrow>
            <IconButton>{params.row.action.delete}</IconButton>
          </Tooltip>
        </div>
      );
    },
  },
];
