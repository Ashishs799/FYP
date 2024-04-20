import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/charpangreylogo.png";
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Navbar.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [backgroundStyle, setBackgroundStyle] = useState("");

  useEffect(() => {
    // Check if the current path is '/'navigate
    if (location.pathname === "/") {
      // Set transparent background for '/'
      setBackgroundStyle("transparent");
    } else {
      // Set #000 background for other paths
      setBackgroundStyle("#000");
    }
  }, [location.pathname]);
  return (
    <div className="navbar" style={{ background: backgroundStyle }}>
      <header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={Logo} alt="Logo" />
        </Link>
        <nav>
          <ul>
            <NavLink
              to="/newcars"
              className="activeLink"
              style={{ textDecoration: "none" }}
            >
              <li>New Cars</li>
            </NavLink>
            <NavLink
              to="/usedcars"
              className="activeLink"
              style={{ textDecoration: "none" }}
            >
              <li>Used Cars</li>
            </NavLink>
            <NavLink
              to="/services"
              className="activeLink"
              style={{ textDecoration: "none" }}
            >
              <li>Services</li>
            </NavLink>
            <NavLink
              to="/aboutus"
              className="activeLink"
              style={{ textDecoration: "none" }}
            >
              <li>About Us</li>
            </NavLink>
            <NavLink
              to="/contactus"
              className="activeLink"
              style={{ textDecoration: "none" }}
            >
              <li>Contact Us</li>
            </NavLink>
            <NavLink
              to="/sell-car"
              className="activeLink"
              style={{ textDecoration: "none" }}
            >
              <li>Sell Car</li>
            </NavLink>
          </ul>
        </nav>
        <div className="logged-In-Out">
          {localStorage.getItem("auth-token") ? (
            <button
              className="hoverEff"
              onClick={() => {
                localStorage.removeItem("auth-token");
                localStorage.removeItem("id")
                navigate("/");
                setIsLoggedIn(false);
                toast.success("Logged Out Successfully");
              }}
            >
              <CiLogout style={{ fontSize: "18px" }} /> Log Out
            </button>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="registerbtn hoverEff">
                <CiUser style={{ fontSize: "18px" }} /> Login/Signup
              </button>
            </Link>
          )}
          {/* {isLoggedIn && (
            // <Link to="/" style={{ textDecoration: "none" }}>
            <button
              className="hoverEff"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out Successfully");
              }}
            >
              <CiLogout style={{ fontSize: "18px" }} /> Log Out
            </button>
            // </Link>
          )}
          {!isLoggedIn && (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="registerbtn hoverEff">
                <CiUser style={{ fontSize: "18px" }} /> Login/Signup
              </button>
            </Link>
          )} */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
