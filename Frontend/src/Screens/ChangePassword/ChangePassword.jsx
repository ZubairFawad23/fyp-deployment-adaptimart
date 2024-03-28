import "./ChangePassword.css";
import Fade from "react-reveal";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  let [OldPassword, setOldPassword] = useState("");
  let [NewPassword, setNewPassword] = useState("");
  let [ConfirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <Fade top>
        <div className="edit_profile_box">
          <div className="edit_profile_heading">Change Password</div>

          <div className="edit_profile_container">
            <div className="edit_profile_input_container">
              <div className="edit_profile_input_label">Old Password</div>

              <input
                type="password"
                value={OldPassword}
                className="edit_profile_input"
                onChange={(event) => {
                  setOldPassword((OldPassword = event.target.value));
                }}
              />
            </div>
            <div className="edit_profile_input_container">
              <div className="edit_profile_input_label">New Password</div>

              <input
                type="password"
                value={NewPassword}
                className="edit_profile_input"
                onChange={(event) => {
                  setNewPassword((NewPassword = event.target.value));
                }}
              />
            </div>
            <div className="edit_profile_input_container">
              <div className="edit_profile_input_label">
                Confirm New Password
              </div>

              <input
                type="password"
                value={ConfirmPassword}
                className="edit_profile_input"
                onChange={(event) => {
                  setConfirmPassword((ConfirmPassword = event.target.value));
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
                Cancel
              </button>
              <button className="edit_profile_btn edit_profile_update_btn">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
