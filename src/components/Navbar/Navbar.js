import React, { useEffect } from "react";
import "./Nabar.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { useAuth } from "../context/AuthProvider";
const Navbar = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useAuth();
  const handleLogout = () => {
    // localStorage.removeItem("isLogin");
    setIsLogin(false);
    navigate("/signIn");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h5>Car management</h5>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/homePage">
                Car Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carCategory">
                Cetegory
              </Link>
            </li>
          </ul>

          <div className="dropdown pe-5 text-white">
            <i className="fa fa-user-circle-o fs-3 dropbtn mx-3"></i>
            <div className="dropdown-content">
              {/* <button className="btn btn-sm btn-danger" onClick={handleLogout}>
                
              </Link> */}
              <Button className="btn btn-sm btn-danger" click={handleLogout}>
                Logout&nbsp;&nbsp; <i className="fa fa-sign-out"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
