import React, { useState ,useRef} from "react";
import SearchSVG from "../assets/svgs/header/SearchSVG";
import NotificationSVG from "../assets/svgs/header/NotificationSVG";
import MessageSVG from "../assets/svgs/header/MessageSVG";
import { LuUserRound } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import DashboardSVG from "../assets/svgs/Nav/DashboardSVG";
import ClassroomsSVG from "../assets/svgs/Nav/ClassroomsSVG";
import StudentsSVG2 from "../assets/svgs/Nav/StudentsSVG2";
import PerformanceSVG from "../assets/svgs/Nav/PerformanceSVG";
import BooksSVG from "../assets/svgs/Nav/BooksSVG";
import CalendarSVG from "../assets/svgs/Nav/CalendarSVG";
import ViewresultsSVG from "../assets/svgs/Nav/ViewresultsSVG";
import NotesSVG from "../assets/svgs/Nav/NotesSVG";
import DocumentsSVG from "../assets/svgs/Nav/DocumentsSVG";

const Header = () => {
  const [search, setSearch] = useState("");
  const offCanvasRef = useRef(null)

  const location = useLocation();
  const navItems = [
    {
      icon: (isActive) => (
        <DashboardSVG stroke={isActive ? "white" : "#A3A3A3"} />
      ),
      name: "Dashboard",
      to: "/",
    },
    {
      icon: (isActive) => (
        <ClassroomsSVG stroke={isActive ? "white" : "#A3A3A3"} />
      ),
      name: "Classrooms",
      to: "/classroom-home",
    },
    {
      icon: (isActive) => (
        <StudentsSVG2 stroke={isActive ? "white" : "#A3A3A3"} />
      ),
      name: "Students",
      to: "/students",
    },
    {
      icon: (isActive) => (
        <PerformanceSVG stroke={isActive ? "white" : "#A3A3A3"} />
      ),
      name: "Performance",
      to: "/performance",
    },
    {
      icon: (isActive) => <BooksSVG stroke={isActive ? "white" : "#A3A3A3"} />,
      name: "Books",
      to: "/books",
    },
    {
      icon: (isActive) => (
        <CalendarSVG stroke={isActive ? "white" : "#A3A3A3"} />
      ),
      name: "Calendar",
      to: "/calendar",
    },
    {
      icon: (isActive) => (
        <ViewresultsSVG stroke={isActive ? "white" : "#A3A3A3"} />
      ),
      name: "Viewresults",
      to: "/viewresults",
    },
    {
      icon: (isActive) => <NotesSVG stroke={isActive ? "white" : "#A3A3A3"} />,
      name: "Notes",
      to: "/notes",
    },
    {
      icon: (isActive) => (
        <DocumentsSVG stroke={isActive ? "white" : "#A3A3A3"} />
      ),
      name: "Documents",
      to: "/documents",
    },
  ];
  return (
    <div
      className="col outlet_height"
    >
      <div className="rounded border bg-white d-md-flex justify-content-md-end p-4">
        <section
          action=""
          className=" d-sm-block col-md-5 col-xl-4 me-md-4 me-lg-0 me-xl-4 me-xxl-1 form-input position-relative"
        >
          <div className="form-input d-md-flex justify-content-end">
            <form className="" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className=" rounded form-control  w-md-100 p-2"
                placeholder="Search..."
                style={{
                  marginLeft: "rem",
                  padding: "0.rem",
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div
                className="position-absolute"
                style={{
                  top: "16%",
                  right: "17px",
                  transform: "translateY(-50)",
                  cursor: "pointer",
                }}
              >
                <SearchSVG />
              </div>
            </form>
          </div>
        </section>

        <div className=" d-flex justify-content-end d-md-flex justify-content-md-end ">
          {/* <button className="btn btn-light border border-secondary-subtle me-2 me-md-3">
            <NotificationSVG />
          </button>

          <button className="btn btn-light border border-secondary-subtle me-2 me-md-3">
            <MessageSVG />
          </button> */}

          <button className="btn btn-light border border-secondary-subtle me-2 me-md-3">
            <LuUserRound />
          </button>

          <button
            className="btn btn-light  border border-secondary-subtle me-2 d-xl-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            <IoMenu className="fs-4" />
          </button>

          <div
            ref={offCanvasRef}
            className="offcanvas offcanvas-start"
            data-bs-backdrop="static"
            tabIndex="-1"
            id="staticBackdrop"
            aria-labelledby="staticBackdropLabel"
            style={{ maxWidth: "75vw" }}
          >
            <div className="offcanvas-body bg-light">
              <div className="">
                <div className="p-4 mt-2 d-flex justify-content-between row">
                  <div className="d-flex justify-content-end col-8 ">
                    <a className="navbar-brand text-center" href="#">
                      <h3 className="brand_name_font">Prepy AI</h3>
                    </a>
                  </div>
                  <div className="col-4 d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>

                <hr className="text-secondary" />

                <ul className="navbar-nav p-2">
                  {navItems.map((item) => (
                    <NavLink
                        to={item.to}
                        key={item.name}
                        className={({ isActive }) =>
                        `link-underline link-underline-opacity-0 sideBarNavLink ${
                            isActive ? "active" : ""
                        }`}
                        onClick={() => {
                            const offcanvasElement = offCanvasRef.current
                            const offCanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement)
                            if(offCanvasInstance){
                                offCanvasInstance.hide()
                            }
                        }}
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
