import { LandingPageNewProduct } from "../../../Assets";
import "./NewProduct.css";

import React from "react";
export default function NewProduct() {
  return (
    <>
      <div className="new_product_box">
        <div className="new_product_header">New</div>
        <div className="new_product_title">Introducing Novilla Mattress</div>

        <img
          src={LandingPageNewProduct}
          alt="New Product"
          className="new_product_img"
        />
      </div>
    </>
  );
}
