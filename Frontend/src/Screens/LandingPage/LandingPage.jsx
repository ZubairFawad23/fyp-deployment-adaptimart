import "swiper/css";
import "swiper/css/pagination";

import { LandingPageBrandsBanner } from "../../Assets";
import "./LandingPage.css";

import React from "react";
import TopProducts from "./TopProducts/TopProducts";
import NewProduct from "./NewProduct/NewProduct";
import Categories from "./Categories/Categories";
import Everyday from "./Everyday/Everyday";
import Slideshow from "../Slideshow/Slideshow";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

export default function LandingPage() {
  return (
    <>
      {/* Slideshow */}

      <Slideshow />

      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="landing_page_brands_banner_container">
          <img
            src={LandingPageBrandsBanner}
            alt="Brands Banner"
            className="landing_page_brands_banner_img"
          />
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <TopProducts />
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <NewProduct />
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Categories />
      </div>

      <div data-aos="fade-down" data-aos-anchor-placement="bottom-bottom">
        <Everyday />
      </div>
    </>
  );
}
