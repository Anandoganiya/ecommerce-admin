import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashBoard, LogIn, SignUp } from "./pages";
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
          <Route path="*" element={<DashBoard />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
