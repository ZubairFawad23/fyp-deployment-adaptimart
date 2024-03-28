import "./EditProfile.css";
import React, { useState } from "react";
import Fade from "react-reveal";

export default function EditProfile() {
  let [FirstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [Email, setEmail] = useState("");
  let [Phone, setPhone] = useState("");
  let [Image, setImage] = useState(null);

  return (
    <>
      <Fade right>
        <div className="edit_profile_box">
          <div className="edit_profile_heading">Edit User Profile</div>

          <div className="edit_profile_container">
            <div className="edit_profile_input_container">
              <div className="edit_profile_input_label">First Name</div>

              <input
                type="text"
                value={FirstName}
                className="edit_profile_input"
                onChange={(event) => {
                  setFirstName((FirstName = event.target.value));
                }}
              />
            </div>
            <div className="edit_profile_input_container">
              <div className="edit_profile_input_label">Last Name</div>

              <input
                type="text"
                value={LastName}
                className="edit_profile_input"
                onChange={(event) => {
                  setLastName((LastName = event.target.value));
                }}
              />
            </div>
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
              <div className="edit_profile_input_label">Phone</div>
              <input
                type="text"
                value={Phone}
                className="edit_profile_input"
                onChange={(event) => {
                  setPhone((Phone = event.target.value));
                }}
              />
            </div>
            <div className="edit_profile_input_container">
              <div className="edit_profile_input_label">Photo</div>
              <div className="edit_profile_media_image_upload_container">
                <input
                  type="file"
                  className="edit_profile_media_image_upload_input"
                  onChange={(e) => {
                    console.log("image", e.target.files[0]);
                    setImage((Image = e.target.files[0]));
                    console.log("image", Image);
                  }}
                />
              </div>
            </div>
            <div className="edit_profile_btn_container">
              <button className="edit_profile_btn edit_profile_cancel_btn">
                Cancel
              </button>
              <button className="edit_profile_btn edit_profile_update_btn">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
