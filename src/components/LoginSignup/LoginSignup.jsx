import React, { useState } from "react";
import "./LoginSignup.css";
import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import userIcon from "../assets/user.png";
import phoneIcon from "../assets/phone.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={userIcon} alt="" />
            <input type="text" placeholder="Full Name" />
          </div>
        )}

        <div className="input">
          <img src={emailIcon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
        {action === "Sign Up" ? (
          <div className="input">
            <img src={phoneIcon} alt="" />
            <input type="phone" placeholder="Phone" />
          </div>
        ) : (
          <div className="forgot-password">
            Forgot Password? <span>Click here</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;