import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import Category from "./pages/Home/Category/Category";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  const [isLogin, setIsLogin] = useState();
  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);
  return <Category />;

  // if (isLogin) {
  //   return (
  //     <div>
  //       <Navbar />
  //       <Routes>
  //         <Route path="/homePage" element={<HomePage />} />
  //         <Route path="/carCategory" element={<Category />} />
  //         {/* <Route path="*" element={<NotFoundPage />} /> */}
  //       </Routes>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <Routes>
  //         <Route path="/" element={<SignIn />} />
  //         <Route path="/signUp" element={<SignUp />} />
  //         {/* <Route path="*" element={<NotFoundPage />} /> */}
  //       </Routes>
  //     </div>
  //   );
  // }
}

export default App;
