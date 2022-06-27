import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  DashBoard,
  LogIn,
  SignUp,
  Categories,
  Products,
  Orders,
  Customers,
  EcommerceStatic,
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
          <Route path="*" element={<DashBoard />}>
            {/* admin dashboard */}
            {/* <Route path="/Ecommerce" element={<EcommerceStatic />}></Route> */}
          </Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
