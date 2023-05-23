import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import Category from "./pages/Home/Category/Category";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import { useAuth } from "./components/context/AuthProvider";

function App() {
  const { isLogin } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/homePage");
    } else {
      navigate("/signIn");
    }
  }, []);
  // return <Category />;
  if (!isLogin) {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/carCategory" element={<Category />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
