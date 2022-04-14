import React, { useState } from "react";
import ImageProduct1 from "../images/image-product-1.jpg";
import ImageProduct2 from "../images/image-product-2.jpg";
import ImageProduct3 from "../images/image-product-3.jpg";
import ImageProduct4 from "../images/image-product-4.jpg";

import IconNext from "../images/icon-next.svg";
import IconPrevious from "../images/icon-previous.svg";
import Thumbnails from "./imgthumb";
import Eye from "../elements/eye";

export default function ImageBanner({ showGallery }) {
  let images = [ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4];
  const [current, setCurrent] = useState(0);

  return (
    <div className="image-banner-container">
      <div
        className={
          current === 0
            ? "img-scroller img-next disabled"
            : "img-scroller img-next"
        }
        onClick={(e) => {
          console.log("clicked");
          setCurrent(current > 0 ? current - 1 : current);
        }}
      >
        <img src={IconPrevious} className="img-scrollers"></img>
      </div>
      <div className="image-wrapper">
        <Eye showGallery={showGallery} />
        <img
          src={images[current]}
          alt="imagebanner"
          className="imageprod"
        ></img>
      </div>
      <div
        className={
          current + 1 === images.length
            ? "img-scroller img-previous disabled"
            : "img-scroller img-previous"
        }
        onClick={(e) => {
          console.log("clicked");
          setCurrent(current < images.length - 1 ? current + 1 : current);
        }}
      >
        <img src={IconNext} className="img-scrollers"></img>
      </div>
      <div className="desktop-thumbnail">
        <Thumbnails setCurrent={setCurrent} />
      </div>
    </div>
  );
}
