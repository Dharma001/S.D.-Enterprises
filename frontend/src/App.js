import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./components/common/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./admin/Dashboard";

function isAuthenticated() {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken !== null;
}

function PrivateRoute({ element, authenticated, redirectTo }) {
  return authenticated ? element : <Navigate to={redirectTo} />;
}

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/adminlogin" && location.pathname !== "/adminRegister" && <Header />}
      <Routes>
        <Route
          path="/adminlogin"
          element={<PrivateRoute element={<Login />} authenticated={!isAuthenticated()} redirectTo="/admindashboard" />}
        />
        <Route
          path="/adminRegister"
          element={<PrivateRoute element={<Register />} authenticated={!isAuthenticated()} redirectTo="/admindashboard" />}
        />
        <Route
          path="/admindashboard"
          element={<PrivateRoute element={<Dashboard />} authenticated={isAuthenticated()} redirectTo="/adminlogin" />}
        />
      </Routes>
    </>
  );
}

export default App;
