import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/authContext";

import Home from "../pages/Home";
import Post from "../pages/Post";

import Login from "../pages/Login";

import PrivateRoute from "./PrivateRoute";

function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<PrivateRoute />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;
