import { BrowserRouter, Routes, Route } from "react-router";

import Login from "../pages/Login";
import Register from "../pages/Register";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
