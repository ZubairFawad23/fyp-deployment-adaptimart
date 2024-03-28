import { useNavigate } from "react-router-dom";
import {
  AdaptiMartLogoCart,
  LandingPageCategory1,
  LandingPageCategory2,
  LandingPageCategory3,
} from "../../../Assets";
import "./Categories.css";

import React, { useEffect, useState } from "react";
import { getcategories } from "../../../api/api";

export default function Categories() {
  const navigate = useNavigate();
  let [categories, setCategories] = useState([]);

  const getCategories = () => {
    getcategories()
      .then((res) => {
        console.log("Categories list retrieved", res.data);
        setCategories((categories = res.data));
      })
      .catch((err) => {
        console.log("Error fetching Categories:", err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <div className="categories_box">
        <div className="categories_heading">Categories</div>

        <div className="categories_container">
          <div className="categories_left_column">
            {categories[0] ? (
              <div className="categories_left_column_infocard">
                <img
                  src={
                    categories[0].image
                      ? "http://localhost:4000/" + categories[0].image
                      : AdaptiMartLogoCart
                  }
                  alt=""
                  className="categories_left_column_infocard_img"
                />

                <div className="categories_left_column_infocard_title">
                  {categories[0].name}
                </div>
              </div>
            ) : (
              ""
            )}
            {categories[2] ? (
              <div className="categories_left_column_infocard">
                <img
                  src={
                    categories[2].image
                      ? "http://localhost:4000/" + categories[2].image
                      : AdaptiMartLogoCart
                  }
                  alt=""
                  className="categories_left_column_infocard_img"
                />

                <div className="categories_left_column_infocard_title">
                  {categories[2].name}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          {categories[1] ? (
            <div className="categories_right_column_infocard">
              <img
                src={
                  categories[1].image
                    ? "http://localhost:4000/" + categories[1].image
                    : AdaptiMartLogoCart
                }
                alt=""
                className="categories_right_column_infocard_img"
              />

              <div className="categories_right_column_infocard_content_container">
                <div className="categories_right_column_infocard_title">
                  {categories[1].name}
                </div>

                <button
                  className="categories_right_column_infocard_button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/categories");
                  }}
                >
                  All Categories
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
