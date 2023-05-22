import React, { useEffect } from "react";
import "./HomePage.css";
import CarDetails from "./Car_Details/CarDetails";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid style-page d-flex justify-content-center align-items-center">
        <div className="text-white row">
          <div className=" text-center">
            <h3 className="col-md-6 m-auto py-2">Welcome To Our Site</h3>
            <p className="col-md-6 m-auto  py-2 d-none d-md-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              nesciunt iure est cumque libero, minima placeat unde culpa
              voluptatibus repudiandae error pariatur qui dolor ratione, quasi
              optio ad! Veniam, quos?
            </p>
            <button className="btn btn-primary my-2">Learn More</button>
          </div>
        </div>
      </div>
      <CarDetails />
    </>
  );
};

export default HomePage;
