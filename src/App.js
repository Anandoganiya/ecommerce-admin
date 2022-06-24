import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  DashBoard,
  LogIn,
  SignUp,
  Categories,
  Products,
  Orders,
  EcommerceStatic,
  Customers,
} from "./pages";
// import userAuth from "./hooks/user-auth";
// import ProtectedRoute from "./helper/ProtectedRoutes";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<ProtectedRoute userAuth={userAuth} />}>
            <Route path="/" element={<div>dashboard</div>}></Route>
          </Route> */}
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

          {/* admin dashboard */}
          <Route path="/Ecommerce" element={<EcommerceStatic />}></Route>

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
          <Route path="/product-details" element={<div>product</div>}></Route>
          <Route
            path="/edit-product/:productId"
            element={<div>product</div>}
          ></Route>
          <Route path="/add-product" element={<div>product</div>}></Route>

          {/* customers */}
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/edit-customer" element={<div>customers</div>}></Route>
          <Route path="/customer-details" element={<div>customer</div>}></Route>

          {/* orders */}
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/order-details" element={<div>order</div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
