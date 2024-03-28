import { useNavigate } from "react-router-dom";
import {
  AdaptiMartLogoWhite,
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterTwitterIcon,
} from "../../Assets";
import "./Footer.css";

import React from "react";

import { Fade } from "react-reveal";

export default function Footer() {
  let categories_list = [
    {
      name: "King Mattress",
    },
    {
      name: "Queen Mattress",
    },
    {
      name: "Classic Mattress",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Fade bottom>
        <div className="footer_box">
          <div className="footer_content_container">
            <div className="footer_email">
              <img
                src={AdaptiMartLogoWhite}
                alt=""
                className="footer_logo_img"
              />
            </div>

            <div className="footer_email">
              <div className="footer_categories_heading">Categories</div>

              <div className="footer_category_links_container">
                {categories_list.map((category) => (
                  <div className="footer_category_name">{category.name}</div>
                ))}
              </div>
            </div>
            <div className="footer_email">
              <div className="footer_categories_heading">Links</div>
              <div className="footer_category_links_container">
                <div
                  className="footer_category_name"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </div>
                <div
                  className="footer_category_name"
                  onClick={() => {
                    navigate("/categories");
                  }}
                >
                  Categories
                </div>
                <div
                  className="footer_category_name"
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  Products
                </div>
                <div
                  className="footer_category_name"
                  onClick={() => {
                    navigate("/about-us");
                  }}
                >
                  About Us
                </div>
              </div>
            </div>

            <div
              className="footer_email"
              style={{
                justifyContent: "center",
              }}
            >
              <div className="footer_social_link_container">
                <img
                  src={FooterTwitterIcon}
                  alt=""
                  className="footer_social_link_img"
                />

                <div className="footer_social_name">Twitter</div>
              </div>
              <div className="footer_social_link_container">
                <img
                  src={FooterInstagramIcon}
                  alt=""
                  className="footer_social_link_img"
                />

                <div className="footer_social_name">Instagram</div>
              </div>
              <div className="footer_social_link_container">
                <img
                  src={FooterFacebookIcon}
                  alt=""
                  className="footer_social_link_img"
                />

                <div className="footer_social_name">Facebook</div>
              </div>
            </div>
          </div>
          <hr className="footer_linebreak" />
          <div className="footer_credits_box">
            <div className="footer_credits">
              Copyright@2024 • Design & Developed by
            </div>
            <div className="footer_credits">
              Ateeb Ahmed | Muhammad Saad Khan | Zubair Fawad
            </div>
            {/* <div className="footer_credits">Ateeb Ahmed</div>
          <div className="footer_credits">Zubair Fawad</div> */}
          </div>
        </div>
      </Fade>
    </>
  );
}
