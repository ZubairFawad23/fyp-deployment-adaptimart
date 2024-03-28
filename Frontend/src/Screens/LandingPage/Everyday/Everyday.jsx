import {
  LandingPageEveryday1,
  LandingPageEveryday2,
  LandingPageEveryday3,
  LandingPageEveryday4,
} from "../../../Assets";
import "./Everyday.css";

import React from "react";

export default function Everyday() {
  let everyday_pics = [
    {
      image: LandingPageEveryday1,
    },
    {
      image: LandingPageEveryday2,
    },
    {
      image: LandingPageEveryday3,
    },
    {
      image: LandingPageEveryday4,
    },
  ];
  return (
    <>
      <div className="everyday_box">
        <div className="everyday_heading">US in Everyday</div>

        <div className="everyday_adaptimart_handle">@Adaptimart</div>

        <div className="everyday_pics_container">
          {everyday_pics.map((pic) => (
            <img src={pic.image} alt="" className="everyday_img" />
          ))}
        </div>
      </div>
    </>
  );
}
