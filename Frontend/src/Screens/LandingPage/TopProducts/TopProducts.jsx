import { useNavigate } from "react-router-dom";
import { AdaptiMartLogoCart } from "../../../Assets";
import "./TopProducts.css";

import React, { useEffect, useState } from "react";
import { gettopproducts } from "../../../api/api";

export default function TopProducts() {
  // let products = [
  //   {
  //     id: 1,
  //     name: "Classic Mattress",
  //     image: "image_1711587039390_Classic Mattress.png",
  //     description: "Classic Mattress",
  //     overall_discount: 0,
  //     item_discount: 0,
  //     price: 100,
  //     unit_price: 100,
  //     category_id: 1,
  //     damage_status: 0,
  //     action_type: 1,
  //     created_on: "2024-03-28T00:50:39.000Z",
  //     edited_on: null,
  //     category_name: "Mattresses",
  //     supplier_name: "Adam",
  //   },
  //   {
  //     id: 2,
  //     name: "Euro Top Mattress",
  //     image: "image_1711587107411_Euro Top Mattress.png",
  //     description: "Euro Top Mattress",
  //     overall_discount: 0,
  //     item_discount: 0,
  //     price: 500,
  //     unit_price: 500,
  //     category_id: 1,
  //     damage_status: 0,
  //     action_type: 1,
  //     created_on: "2024-03-28T00:51:47.000Z",
  //     edited_on: null,
  //     category_name: "Mattresses",
  //     supplier_name: "Jack",
  //   },
  //   {
  //     id: 3,
  //     name: "Classic Mattress",
  //     image: "image_1711600734677_Classic Mattress.png",
  //     description: "Top Quality",
  //     overall_discount: null,
  //     item_discount: 0,
  //     price: 100,
  //     unit_price: 100,
  //     category_id: 1,
  //     damage_status: 0,
  //     action_type: 1,
  //     created_on: "2024-03-28T04:38:54.000Z",
  //     edited_on: null,
  //     category_name: "Mattresses",
  //     supplier_name: "Adam",
  //   },
  //   {
  //     id: 4,
  //     name: "Classic Mattress",
  //     image: "image_1711600739287_Classic Mattress.png",
  //     description: "Top Quality",
  //     overall_discount: null,
  //     item_discount: 0,
  //     price: 100,
  //     unit_price: 100,
  //     category_id: 1,
  //     damage_status: 0,
  //     action_type: 1,
  //     created_on: "2024-03-28T04:38:59.000Z",
  //     edited_on: null,
  //     category_name: "Mattresses",
  //     supplier_name: "Adam",
  //   },
  //   {
  //     id: 5,
  //     name: "Classic Mattress",
  //     image: "image_1711600758549_Classic Mattress.png",
  //     description: "Top Quality",
  //     overall_discount: null,
  //     item_discount: 0,
  //     price: 100,
  //     unit_price: 100,
  //     category_id: 1,
  //     damage_status: 0,
  //     action_type: 1,
  //     created_on: "2024-03-28T04:39:18.000Z",
  //     edited_on: null,
  //     category_name: "Mattresses",
  //     supplier_name: "Adam",
  //   },
  //   {
  //     id: 6,
  //     name: "Firm Mattress",
  //     image: "image_1711600794981_Firm Mattress.png",
  //     description: "Top Quality",
  //     overall_discount: null,
  //     item_discount: 0,
  //     price: 100,
  //     unit_price: 100,
  //     category_id: 1,
  //     damage_status: 0,
  //     action_type: 1,
  //     created_on: "2024-03-28T04:39:55.000Z",
  //     edited_on: null,
  //     category_name: "Mattresses",
  //     supplier_name: "Adam",
  //   },
  //   {
  //     id: 7,
  //     name: "Plush Mattress",
  //     image: "image_1711600824746_Plush Mattress.png",
  //     description: "Top Quality",
  //     overall_discount: null,
  //     item_discount: 0,
  //     price: 100,
  //     unit_price: 100,
  //     category_id: 1,
  //     damage_status: 0,
  //     action_type: 1,
  //     created_on: "2024-03-28T04:40:24.000Z",
  //     edited_on: null,
  //     category_name: "Mattresses",
  //     supplier_name: "Adam",
  //   },
  //   {
  //     id: 8,
  //     name: "Medium Hybrid Mattress",
  //     image: "image_1711600861274_Medium Hybrid Mattress.png",
  //     description: "Top Quality",
  //     overall_discount: null,
  //     item_discount: 0,
  //     price: 100,
  //     unit_price: 100,
  //     category_id: 1,
  //     damage_status: 0,
  //     action_type: 1,
  //     created_on: "2024-03-28T04:41:01.000Z",
  //     edited_on: null,
  //     category_name: "Mattresses",
  //     supplier_name: "Adam",
  //   },
  //   {
  //     id: 9,
  //     name: "King Size Mattress",
  //     image: "image_1711600881460_matress_1.png",
  //     description: "Top Quality",
  //     overall_discount: null,
  //     item_discount: 0,
  //     price: 100,
  //     unit_price: 100,
  //     category_id: 1,
  //     damage_status: 0,
  //     action_type: 1,
  //     created_on: "2024-03-28T04:41:21.000Z",
  //     edited_on: null,
  //     category_name: "Mattresses",
  //     supplier_name: "Adam",
  //   },
  //   {
  //     id: 10,
  //     name: "Queen Size Mattress",
  //     image: "image_1711600896343_matress_3.png",
  //     description: "Top Quality",
  //     overall_discount: null,
  //     item_discount: 0,
  //     price: 100,
  //     unit_price: 100,
  //     category_id: 1,
  //     damage_status: 0,
  //     action_type: 1,
  //     created_on: "2024-03-28T04:41:36.000Z",
  //     edited_on: null,
  //     category_name: "Mattresses",
  //     supplier_name: "Adam",
  //   },
  // ];

  let [products, setProducts] = useState([]);

  const getTopProducts = () => {
    gettopproducts()
      .then((res) => {
        console.log("Top Products list retrieved", res.data);
        setProducts((products = res.data));
      })
      .catch((err) => {
        console.log("Error fetching top products list:", err);
      });
  };

  useEffect(() => {
    getTopProducts();
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <div className="top_products_box">
        <div className="top_products_header_container">
          <div className="top_products_heading">Top Products</div>

          <button
            className="top_products_heading_btn"
            onClick={(e) => {
              e.preventDefault();
              navigate("products");
            }}
          >
            Shop Now
          </button>
        </div>

        <div className="top_products_container">
          {products.slice(0, 6).map((product, index) => (
            <div
              className="top_products_infocard"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                navigate("/product-details", {
                  state: {
                    product: product,
                  },
                });
              }}
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
            </div>
          ))}
        </div>

        <button
          className="top_products_shop_now_btn"
          onClick={(e) => {
            e.preventDefault();
            navigate("products");
          }}
        >
          All Products
        </button>
      </div>
    </>
  );
}
