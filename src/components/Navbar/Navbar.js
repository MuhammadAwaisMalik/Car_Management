import React from "react";
import "./Nabar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <h5>Car management</h5>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Car Details
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cetegory
              </a>
            </li>
          </ul>

          <div class="dropdown pe-5 text-white">
            <i className="fa fa-user-circle-o fs-3 dropbtn mx-3"></i>
            <div class="dropdown-content">
              <Link className="btn btn-sm btn-danger">
                Logout&nbsp;&nbsp;<i class="fa fa-sign-out"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
