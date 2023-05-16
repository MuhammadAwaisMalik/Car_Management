import React, { useState } from "react";
import "./Auth.css";
import Input, { InputGroup } from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  let submit = false;
  const handleEmail = (e) => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const Email = e.target.value;
    setEmail(Email);
    if (Email.length < 1) {
      setEmailErr("Enter Email");
    } else if (!Email.match(pattern)) {
      setEmailErr("Invalid Email");
    } else {
      setEmailErr("");
    }
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (password.length < 1) {
      setPasswordErr("Enter User Name");
    } else if (password.length < 3) {
      setPasswordErr("Minimum 3 digits");
    } else {
      setPasswordErr("");
    }
  };
  const CheckValidation = () => {
    if (!email) {
      setEmailErr("Enter Email");
    } else if (!password) {
      setPasswordErr("Enter Phone");
    } else {
      submit = true;
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    CheckValidation();
    if (submit === true) {
      alert("Done");
    }
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="container-fluid bg-image">
        <div className="page-height d-flex ms-5 align-items-center">
          <div className=" border login">
            <div className="row">
              <div className="col-12">
                <h2 className="fw-bold text-center">SIGN IN</h2>
              </div>
              <div className="mt-3">
                <InputGroup
                  type="email"
                  id="email"
                  label="Email"
                  labelclassName="fw-normal"
                  placeholder="Enter Email"
                  className="inputFocus"
                  change={handleEmail}
                  Err={emailErr}
                >
                  <i className="fa fa-envelope-o"></i>
                </InputGroup>
              </div>

              <div className="mt-3">
                <InputGroup
                  type={show ? "text" : "password"}
                  id="password"
                  label="Password"
                  labelclassName="fw-normal"
                  placeholder="Enter Password"
                  className="inputFocus"
                  change={handlePassword}
                  Err={passwordErr}
                >
                  {!show ? (
                    <i className="fa fa-eye-slash" onClick={handleShow}></i>
                  ) : (
                    <i className="fa fa-eye" onClick={handleShow}></i>
                  )}
                </InputGroup>
              </div>

              <div className="text-center  mt-4">
                <Button
                  className="btn btn-primary w-50 rounded-pill"
                  click={handleLogin}
                >
                  Sign In
                </Button>
              </div>
              <div className="p-4 text-center">
                Register first ?<Link to="/signUp">SignUp</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
