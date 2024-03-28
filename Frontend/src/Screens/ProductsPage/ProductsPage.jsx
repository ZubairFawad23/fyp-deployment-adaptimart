import { useNavigate } from "react-router-dom";
import { AdaptiMartLogoCart } from "../../Assets";
import Slideshow from "../Slideshow/Slideshow";
import "./ProductsPage.css";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getproductsbyname, gettopproducts } from "../../api/api";
AOS.init();

export default function ProductsPage() {
  const [filteredProducts, setfilteredProducts] = useState([]);
  let [searchProductName, setsearchProductName] = useState("");

  const getProducts = () => {
    gettopproducts()
      .then((res) => {
        console.log("Products list retrieved", res.data);
        setfilteredProducts(res.data);
      })
      .catch((err) => {
        console.log("Error fetching Products list:", err);
      });
  };

  const getProductsByName = (SearchName) => {
    let reqObj = {
      name: SearchName,
    };
    console.log("reqObj", reqObj);
    getproductsbyname(SearchName)
      .then((res) => {
        console.log("Searched Products list retrieved");
        setfilteredProducts(res.data);
      })
      .catch((err) => {
        console.log("Error fetching Searched Products:", err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Number of categories per page

  const navigate = useNavigate();

  const handleClickNext = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(filteredProducts.length / pageSize))
    );
  };

  const handleClickPrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the products array to get categories for the current page
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      <Slideshow />

      <div className="categories_page_top_products_box">
        <div
          className="categories_page_header"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="categories_page_header_title">Products</div>

          <input
            type="text"
            placeholder="Search..."
            className="categories_page_header_input"
            onChange={(e) => {
              setsearchProductName((searchProductName = e.target.value));
              console.log("searchProductName", searchProductName);
              getProductsByName(searchProductName);
            }}
          />
        </div>

        <div className="top_products_container">
          {currentProducts.map((product) => (
            <div
              className="top_products_infocard"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                // src={product.image}
                src={
                  product.image
                    ? "http://localhost:4000/" + product.image
                    : AdaptiMartLogoCart
                }
                alt=""
                className="top_products_infocard_img"
              />

              <div className="top_products_infocard_content_container">
                <div className="top_products_infocard_title">
                  {product.name}
                </div>
                <div className="top_products_infocard_price">
                  $ {product.price}
                </div>
              </div>
              <button
                className="product_page_infocard_btn"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/product-details", {
                    state: {
                      product: product,
                    },
                  });
                }}
              >
                View Product
              </button>
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
            disabled={endIndex >= filteredProducts.length}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
