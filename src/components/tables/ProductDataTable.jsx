import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const ProductDataTable = () => {
  return (
    <div
      style={{ height: 450, width: 950 }}
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
export default ProductDataTable;

const customerRow = [
  {
    id: 1,
    sku: "9A443B",
    productName: "Freshmaker Wipes",
    category: "Baby Care",
    price: 345,
    stock: 5,
    status: "Selling",
    discount: 20,
    published: false,
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 2,
    sku: "9A443B",
    productName: "Freshmaker Wipes",
    category: "Baby Care",
    price: 345,
    stock: 5,
    status: "Selling",
    discount: 20,
    published: false,
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 3,
    sku: "9A443B",
    productName: "Freshmaker Wipes",
    category: "Baby Care",
    price: 345,
    stock: 5,
    status: "Selling",
    discount: 20,
    published: false,
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 4,
    sku: "9A443B",
    productName: "Freshmaker Wipes",
    category: "Baby Care",
    price: 345,
    stock: 5,
    status: "Selling",
    discount: 20,
    published: false,
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 5,
    sku: "9A443B",
    productName: "Freshmaker Wipes",
    category: "Baby Care",
    price: 345,
    stock: 5,
    status: "Selling",
    discount: 20,
    published: false,
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 6,
    sku: "9A443B",
    productName: "Freshmaker Wipes",
    category: "Baby Care",
    price: 345,
    stock: 5,
    status: "Selling",
    discount: 20,
    published: false,
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 7,
    sku: "9A443B",
    productName: "Freshmaker Wipes",
    category: "Baby Care",
    price: 345,
    stock: 5,
    status: "Selling",
    discount: 20,
    published: false,
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 8,
    sku: "9A443B",
    productName: "Freshmaker Wipes",
    category: "Baby Care",
    price: 345,
    stock: 5,
    status: "Selling",
    discount: 20,
    published: false,
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
  {
    id: 9,
    sku: "9A443B",
    productName: "Freshmaker Wipes",
    category: "Baby Care",
    price: 345,
    stock: 5,
    status: "Selling",
    discount: 20,
    published: false,
    action: {
      edit: <FiEdit2 />,
      delete: <MdDeleteOutline />,
      view: <GrFormView />,
    },
  },
];

const customerCol = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "productName", headerName: "Product Name", width: 130 },
  { field: "category", headerName: "Category", width: 100 },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    width: 100,
  },
  {
    field: "discount",
    headerName: "Discount",
    type: "number",
    width: 100,
  },
  {
    field: "published",
    headerName: "Published",
    width: 100,
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
              <Link to={"/product-details"}>{params.row.action.view}</Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit" placement="top" arrow>
            <IconButton>
              <Link to={"/edit-product/43"}>{params.row.action.edit}</Link>
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
