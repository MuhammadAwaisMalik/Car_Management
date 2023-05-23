import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import randomstring from "randomstring";

import Input, { InputGroup } from "../../components/Input";
import Button from "../../components/Button";
import CarImage from "../../assets/signup.jpg";
import emailjs from "@emailjs/browser";
import { useAuth } from "../../components/context/AuthProvider";

const SignUp = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [userName, setUserName] = useState("");
  const [password_s, setPassword_s] = useState();
  const [userNameErr, setUserNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phone, setPhone] = useState();
  const [phoneErr, setPhoneErr] = useState("");
  const [passArray, setPassArray] = useState([]);
  const { setUserEmail, setUserPassword } = useAuth();
  const form = useRef();
  let submit = false;
  const handleName = (e) => {
    const Name = e.target.value;
    setName(Name);
    if (Name.length < 1) {
      setNameErr("Enter FullName");
    } else {
      setNameErr("");
    }
  };
  const handleUserName = (e) => {
    const UserName = e.target.value;
    setUserName(UserName);
    if (UserName.length < 1) {
      setUserNameErr("Enter User Name");
    } else if (UserName.length < 3) {
      setUserNameErr("Minimum 3 digits");
    } else {
      setUserNameErr("");
    }
  };
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
  const handlePhone = (e) => {
    const Phone = e.target.value;
    setPhone(Phone);
    if (Phone.length < 1) {
      setPhoneErr("Enter Phone No");
    } else if (Phone.length > 11 || Phone.length < 11) {
      setPhoneErr("Phone must be 11 No");
    } else {
      setPhoneErr("");
    }
  };
  const generatePassword = () => {
    const password = randomstring.generate({
      length: 10,
      charset: "alphanumeric",
    });

    return password;
  };
  const checkValidation = () => {
    if (!name) {
      setNameErr("Enter Name");
    } else if (!userName) {
      setUserNameErr("Enter UserName");
    } else if (!email) {
      setEmailErr("Enter Email");
    } else if (!phone) {
      setPhoneErr("Enter Phone");
    } else {
      submit = true;
      setPassword_s(generatePassword());
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidation();
    if (submit === true) {
      emailjs
        .sendForm(
          "service_13wgdqq",
          "template_98e42za",
          form.current,
          "INiHsr8o9gYKTU0nN"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log(passArray);
            alert("Password Sent to Your Email");
          },
          (error) => {
            console.log(error.text);
            alert("error");
          }
        );
      setUserPassword(password_s);
      setUserEmail(email);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 px-0 d-none d-md-block">
            <img src={CarImage} className="w-100" style={{ height: "100vh" }} />
          </div>
          <div className="col-md-5 col-12">
            <div className="container p-5 my-4 shadow">
              <div className="row">
                <div className="col-12">
                  <h2 className="fw-bold text-center">SIGN UP</h2>
                </div>
                <form ref={form}>
                  <input
                    type="password"
                    className="d-none"
                    name="password_send"
                    value={password_s}
                  />
                  <InputGroup
                    type="text"
                    id="name"
                    label="Full Name"
                    name="to_name"
                    labelclassName="fw-normal"
                    placeholder="Enter Full Name"
                    change={handleName}
                    className="inputFocus"
                    Err={nameErr}
                  >
                    <i className="fa fa-user"></i>
                  </InputGroup>

                  <InputGroup
                    type="text"
                    id="userName"
                    label="UserName"
                    labelclassName="fw-normal"
                    className="inputFocus"
                    placeholder="Enter Usename Name"
                    change={handleUserName}
                    Err={userNameErr}
                  >
                    <i className="fa fa-user-circle-o"></i>
                  </InputGroup>
                  <InputGroup
                    type="email"
                    id="email"
                    name="email_id"
                    label="Email"
                    labelclassName="fw-normal"
                    placeholder="Enter Email"
                    className="inputFocus"
                    change={handleEmail}
                    Err={emailErr}
                  >
                    <i className="fa fa-envelope-o"></i>
                  </InputGroup>
                  <InputGroup
                    type="number"
                    id="phone"
                    label="Phone No"
                    labelclassName="fw-normal"
                    placeholder="Enter Phone No"
                    className="inputFocus"
                    change={handlePhone}
                    Err={phoneErr}
                  >
                    <i className="fa fa-phone"></i>
                  </InputGroup>
                  <div className="text-center  mt-3">
                    <Button
                      className="btn btn-primary w-50"
                      click={handleSubmit}
                    >
                      Sign Up
                    </Button>
                  </div>
                  <div className="p-4 text-center">
                    Already user ? <Link to="/signIn">SignIn</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
