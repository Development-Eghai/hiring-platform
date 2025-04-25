import { NavLink, useLocation } from "react-router-dom";
import DashboardSVG from "../assets/svgs/Nav/DashboardSVG";
import ClassroomsSVG from "../assets/svgs/Nav/ClassroomsSVG";
import StudentsSVG2 from "../assets/svgs/Nav/StudentsSVG2";
import PerformanceSVG from "../assets/svgs/Nav/PerformanceSVG";
import BooksSVG from "../assets/svgs/Nav/BooksSVG";
import CalendarSVG from "../assets/svgs/Nav/CalendarSVG";
// import ViewresultsSVG from "../assets/svgs/Nav/ViewresultsSVG";
import NotesSVG from "../assets/svgs/Nav/NotesSVG";
import DocumentsSVG from "../assets/svgs/Nav/DocumentsSVG";
import { useState } from "react";

const SideBar = () => {
  const location = useLocation();
  const navItems = [
    {
      icon: (isActive) => (
        <DashboardSVG stroke={isActive ? "white" : "#A3A3A3"} />
      ),
      name: "Reporting",
      to: "/",
    },
   
    {
      icon: (isActive) => (
        <StudentsSVG2 stroke={isActive ? "white" : "#A3A3A3"} />
      ),
      name: "Planning",
      to: "/students",
    },
    {
      icon: (isActive) => (
        <PerformanceSVG stroke={isActive ? "white" : "#A3A3A3"} />
      ),
      name: "Hiring",
      to: "/hiring",
    },
   
  ];

  // const [navopen,setnavopen]=useState(false)
  return (
    <div
      className="d-none col-lg-2 d-xl-block col-xl-2 position-sticky top-0 bg-white"
      id="leftside_bar"
      style={{ height: "100vh" }}
    >
      <div className="p-4">
        <a className="navbar-brand text-center" href="#">
          <h3 className="brand_name_font">PixelAdvant</h3>
          {/* <button type="button" className="btn btn-primary" onClick={() =>setnavopen(!navopen)}> hi</button> */}
        </a>
      </div>

      <hr className="text-secondary" />
{/* {navopen ? */}
     <>
     <ul className="navbar-nav p-2">
        {navItems.map((item) => (
          <NavLink
            to={item.to}
            key={item.name}
            className={({ isActive }) =>
              `link-underline link-underline-opacity-0 sideBarNavLink ${
                isActive ? "active" : ""
              }`
            }
          >
            <li
              className={`nav-item ${
                location.pathname === item.to ? "brand_color" : ""
              }`}
            >
              <div
                className="nav-link d-flex justify-content-center align-items-center"
              >
                <div className="w-75">
                  <div className="py-1 rounded row">
                    <div className="col-3">
                      <span className="">
                        {item.icon(location.pathname === item.to)}
                      </span>
                    </div>
                    <div className="col-9 justify-content-center sideBarNavLink_name">
                      <span className="">{item.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </NavLink>
        ))}
      </ul>
     </>
     {/* : */}
     {/* <>
     <ul className="navbar-nav p-2">
        {navItems.map((item) => (
          <NavLink
            to={item.to}
            key={item.name}
            className={({ isActive }) =>
              `link-underline link-underline-opacity-0 sideBarNavLink ${
                isActive ? "active" : ""
              }`
            }
          >
            <li
              className={`nav-item ${
                location.pathname === item.to ? "brand_color" : ""
              }`}
            >
              <div
                className="nav-link d-flex justify-content-center align-items-center"
              >
                <div className="w-75">
                  <div className="py-1 rounded row">
                    <div className="col-3">
                      <span className="">
                        {item.icon(location.pathname === item.to)}
                      </span>
                    </div>
                    <div className="col-9 justify-content-center sideBarNavLink_name">
                      {/* <span className="">{item.name}</span> */}
                    {/* </div>
                  </div>
                </div>
              </div>
            </li>
          </NavLink>
        ))}
      </ul>
     </> */} 
      {/* } */}
    </div>
  );
};

export default SideBar;
