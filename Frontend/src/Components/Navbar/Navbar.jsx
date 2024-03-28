import { NavLink, useNavigate } from "react-router-dom";
import {
  AdaptiMartLogo,
  NavbarCartLogo,
  NavbarProfileLogo,
} from "../../Assets";
import "./Navbar.css";

import React, { useEffect, useRef, useState } from "react";
import CartPopUp from "../CartPopUp/CartPopUp";
import { Fade } from "react-reveal";

export default function Navbar() {
  // let [ActiveLink, setActiveLink] = useState(1);
  const [cartpopup, setcartpopup] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <CartPopUp cartpopup={cartpopup} setcartpopup={setcartpopup} />
      <Fade top>
        <div className="navbar_main_container">
          <div className="navbar_left_container">
            <img src={AdaptiMartLogo} alt="" className="navbar_logo_img" />

            <div className="navbar_links_container">
              <NavLink
                to="/"
                className={"navbar_link"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#18abb1" : "#02021D",
                  };
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/categories"
                className={"navbar_link"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#18abb1" : "#02021D",
                  };
                }}
              >
                Categories
              </NavLink>
              <NavLink
                to="/products"
                className={"navbar_link"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#18abb1" : "#02021D",
                  };
                }}
              >
                Products
              </NavLink>
              <NavLink
                to="/about-us"
                className={"navbar_link"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#18abb1" : "#02021D",
                  };
                }}
              >
                About Us
              </NavLink>
            </div>
          </div>
          <div className="navbar_right_container" ref={dropdownRef}>
            <img
              src={NavbarProfileLogo}
              alt="Profile Icon"
              className="navbar_icon_img"
              onClick={toggleDropdown}
            />
            {dropdownVisible && (
              <Fade top>
                <div className="dropdown_menu">
                  {/* Dropdown menu content goes here */}
                  <ul>
                    <li
                      onClick={() => {
                        setDropdownVisible(false);
                        navigate("/user-profile");
                      }}
                    >
                      Your Profile
                    </li>
                    <li
                      onClick={() => {
                        setDropdownVisible(false);
                        navigate("/edit-profile");
                      }}
                    >
                      Edit Profile
                    </li>

                    <li
                      onClick={() => {
                        setDropdownVisible(false);
                        navigate("/change-password");
                      }}
                    >
                      Change Password
                    </li>
                    <li>Logout</li>
                  </ul>
                </div>
              </Fade>
            )}
            <img
              src={NavbarCartLogo}
              alt="Cart Icon"
              className="navbar_icon_img"
              onClick={() => {
                setcartpopup(true);
              }}
            />
          </div>
        </div>
      </Fade>
    </>
  );
}
