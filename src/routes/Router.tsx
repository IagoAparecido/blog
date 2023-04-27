import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Post from "../pages/Post";
import AddPost from "../pages/AddPost";
import Login from "../pages/Login";

import PrivateRoute from "./PrivateRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add"
          element={<PrivateRoute element={AddPost} isAuthenticated={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
