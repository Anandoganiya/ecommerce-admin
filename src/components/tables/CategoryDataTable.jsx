import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const CategoryDataTable = () => {
  return (
    <div
      style={{ height: 300, width: 560 }}
      className="rounded-xl border-gray-dark shadow-xl p-4"
    >
      <DataGrid
        rows={categoryRow}
        columns={categoryCol}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};
export default CategoryDataTable;

const categoryRow = [
  {
    id: 1,
    categoryName: "Drinks",
    type: "Grocery",
    published: "false",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
    },
  },

  {
    id: 2,
    categoryName: "Drinks",
    type: "Grocery",
    published: "false",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
    },
  },

  {
    id: 3,
    categoryName: "Drinks",
    type: "Grocery",
    published: "false",
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
    },
  },
];

const categoryCol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "categoryName", headerName: "Category Name", width: 130 },
  { field: "type", headerName: "Type", width: 100 },
  {
    field: "published",
    headerName: "Published",
    width: 90,
  },

  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cursor-pointer">
          <Tooltip title="Edit" placement="top" arrow>
            <IconButton>
              <Link to={"/edit-category/43"}>{params.row.action.edit}</Link>
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
