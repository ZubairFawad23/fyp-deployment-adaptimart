import { useNavigate } from "react-router-dom";
import "./Login.css";
import Fade from "react-reveal";
import React, { useState } from "react";

export default function Login() {
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <Fade top>
        <div className="edit_profile_box">
          <div className="edit_profile_heading">Login</div>

          <div className="edit_profile_container">
            <div className="edit_profile_input_container">
              <div className="edit_profile_input_label">Email</div>

              <input
                type="email"
                value={Email}
                className="edit_profile_input"
                onChange={(event) => {
                  setEmail((Email = event.target.value));
                }}
              />
            </div>
            <div className="edit_profile_input_container">
              <div className="edit_profile_input_label">Password</div>

              <input
                type="password"
                value={Password}
                className="edit_profile_input"
                onChange={(event) => {
                  setPassword((Password = event.target.value));
                }}
              />
            </div>

            <div className="edit_profile_btn_container">
              <button
                className="edit_profile_btn edit_profile_cancel_btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                Go To Home
              </button>
              <button className="edit_profile_btn edit_profile_update_btn">
                Login
              </button>
            </div>

            <div className="login_signup_text">
              Dont have an existing account?{" "}
              <span
                className="login_signup_text_link"
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Sign up!
              </span>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
