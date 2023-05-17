import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      {/* <Routes> */}
      <Navbar />
      <HomePage />
      {/* <Route path="/" element={<SignIn />} /> */}
      {/* <Route path="/signUp" element={<SignUp />} /> */}

      {/* </Routes> */}
    </>
  );
}

export default App;
