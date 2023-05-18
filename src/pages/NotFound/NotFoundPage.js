import React from "react";
import "./NotFoundpage.css";

const NotFoundPage = () => {
  return (
    <div className="container_not">
      <h1 className="h1_not">404</h1>
      <p className="-_not">Oops! Page not found.</p>
      <a href="/" className="btn_not">
        Go Back to Homepage
      </a>
    </div>
  );
};

export default NotFoundPage;
