import React from "react";
import { Sidebar, Navbar } from "../components";
import { useStatusContext } from "../context/ContextProvider";
import { Routes, Route } from "react-router-dom";
import {
  Categories,
  Products,
  EditProduct,
  AddProduct,
  ProductDetails,
  Orders,
  OrderDetails,
  EcommerceStatic,
  Customers,
  EditCustomer,
  CustomerDetails,
} from "../pages";

const DashBoard = () => {
  const { activeMenu } = useStatusContext();
  return (
    <>
      <div className="flex">
        {activeMenu ? (
          <div className="w-72 h-screen fixed bg-slate-100">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0">sidebar</div>
        )}
        <div className={`w-full  ${activeMenu ? "md:ml-72" : "flex-2"}`}>
          <div className="fixed w-full bg-slate-200 md:static">
            <Navbar />
          </div>
        </div>
      </div>
      <Routes>
        {/* Ecommnerce statictics */}
        <Route path="/" element={<EcommerceStatic />}></Route>
        {/* category */}
        <Route path="/categories" element={<Categories />}></Route>
        <Route
          path="/categories-list"
          element={<div>category list</div>}
        ></Route>
        <Route
          path="/edit-category/:categoryId"
          element={<div>category</div>}
        ></Route>
        <Route path="/add-category" element={<div>category</div>}></Route>

        {/* products */}
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
        <Route
          path="/edit-product/:productId"
          element={<EditProduct />}
        ></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>

        {/* customers */}
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/edit-customer" element={<EditCustomer />}></Route>
        <Route path="/customer-details" element={<CustomerDetails />}></Route>

        {/* orders */}
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/order-details" element={<OrderDetails />}></Route>
      </Routes>
    </>
  );
};

export default DashBoard;
