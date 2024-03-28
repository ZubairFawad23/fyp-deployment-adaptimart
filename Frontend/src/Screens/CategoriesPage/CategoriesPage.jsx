import { AdaptiMartLogoCart } from "../../Assets";
import { getcategories, getcategoriesbyname } from "../../api/api";
import Slideshow from "../Slideshow/Slideshow";
import "./CategoriesPage.css";

import React, { useEffect, useState } from "react";

export default function CategoriesPage() {
  // const categories = [
  //   {
  //     id: 1,
  //     parent_id: null,
  //     name: "Mattresses",
  //     image: "image_1711640064090_matress_1.png",
  //     action_type: 1,
  //     created_on: "2024-03-28T15:34:24.000Z",
  //     edited_on: null,
  //   },
  //   {
  //     id: 2,
  //     parent_id: null,
  //     name: "Furniture",
  //     image: "image_1711640083870_chair.png",
  //     action_type: 1,
  //     created_on: "2024-03-28T15:34:43.000Z",
  //     edited_on: null,
  //   },
  // ];
  const [filteredCategories, setfilteredCategories] = useState([]);
  let [searchCategoryName, setsearchCategoryName] = useState("");

  const getCategories = () => {
    getcategories()
      .then((res) => {
        console.log("Categories list retrieved", res.data);
        setfilteredCategories(res.data);
      })
      .catch((err) => {
        console.log("Error fetching Categories list:", err);
      });
  };

  const getCategoriesByName = (SearchName) => {
    let reqObj = {
      name: SearchName,
    };
    console.log("reqObj", reqObj);
    getcategoriesbyname(SearchName)
      .then((res) => {
        console.log("Searched Categories list retrieved");
        setfilteredCategories(res.data);
      })
      .catch((err) => {
        console.log("Error fetching Searched Categories:", err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3; // Number of categories per page

  const handleClickNext = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(filteredCategories.length / pageSize))
    );
  };

  const handleClickPrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the products array to get categories for the current page
  const currentCategories = filteredCategories.slice(startIndex, endIndex);

  return (
    <>
      <Slideshow />
      <div className="categories_page_top_products_box">
        <div className="categories_page_header">
          <div className="categories_page_header_title">Categories</div>

          <input
            type="text"
            placeholder="Search..."
            className="categories_page_header_input"
            value={searchCategoryName}
            onChange={(e) => {
              setsearchCategoryName((searchCategoryName = e.target.value));
              console.log("searchCategoryName", searchCategoryName);
              getCategoriesByName(searchCategoryName);
            }}
          />
        </div>

        <div className="top_products_container">
          {currentCategories.map((category) => (
            <div key={category.id} className="top_products_infocard">
              <img
                // src={category.image}
                src={
                  category.image
                    ? "http://localhost:4000/" + category.image
                    : AdaptiMartLogoCart
                }
                alt=""
                className="top_products_infocard_img"
              />

              <div className="top_products_infocard_content_container">
                <div className="top_products_infocard_title">
                  {category.name}
                </div>
                {/* <div className="top_products_infocard_price">
                  $ {category.price}
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="categories_page_pagination_buttons">
          <button
            className="categories_page_pagination_btn"
            onClick={handleClickPrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="categories_page_pagination_btn"
            onClick={handleClickNext}
            disabled={endIndex >= filteredCategories.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
