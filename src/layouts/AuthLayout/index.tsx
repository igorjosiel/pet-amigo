import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="flex flex-row md:items-center md:justify-center h-screen">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
