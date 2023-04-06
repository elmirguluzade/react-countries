import { Outlet } from "react-router-dom";
import Headers from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
};

export default Layout;
