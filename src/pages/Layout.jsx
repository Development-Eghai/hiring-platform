import { Outlet } from "react-router-dom";

import SideBar from "../Components/SideBar";
import Header from "../Components/Header";

const Layout = () => {
  return (
    <div
      className="container-fluid bg_performancePage_body"
    >
      <div className="row h-100">
        <SideBar />

        <div className="bg_dashboard col-12 col-md-12 col-xl-10 p-1 p-md-3 d-flex flex-column">
          <Header />

          <div className="overflow-auto outlet_balheight flex-grow-1 mt-2 mt-md-3 rounded w-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
