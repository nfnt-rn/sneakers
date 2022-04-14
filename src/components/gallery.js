import React, { useState } from "react";
import ImageProduct1 from "../images/image-product-1.jpg";
import ImageProduct2 from "../images/image-product-2.jpg";
import ImageProduct3 from "../images/image-product-3.jpg";
import ImageProduct4 from "../images/image-product-4.jpg";

import IconClose from "../images/icon-close-white.svg";

import IconNext from "../images/icon-next.svg";
import IconPrevious from "../images/icon-previous.svg";
import Thumbnails from "./imgthumb";

export default function Gallery({ showGallery }) {
  let images = [ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4];
  const [current, setCurrent] = useState(0);

  return (
    <div className="backdrop-gallery">
      <div className="image-modal">
        <div className="close-gall-div">
          <img
            src={IconClose}
            className="icon close-gallery"
            onClick={(e) => {
              console.log("res");
              showGallery(false);
            }}
          ></img>
        </div>
        <div className="gallery-img-container">
          <div
            className={
              current === 0
                ? "img-scroller  gallery-scroller img-next disabled"
                : "img-scroller   gallery-scroller img-next"
            }
            onClick={(e) => {
              setCurrent(current > 0 ? current - 1 : current);
            }}
          >
            <img src={IconPrevious} className="img-scrollers "></img>
          </div>
          <img
            src={images[current]}
            alt="imagebanner"
            className="imageprod galleryimage"
          ></img>
          <div
            className={
              current + 1 === images.length
                ? "img-scroller gallery-scroller img-previous disabled"
                : "img-scroller  gallery-scroller img-previous"
            }
            onClick={(e) => {
              setCurrent(current < images.length - 1 ? current + 1 : current);
            }}
          >
            <img src={IconNext} className="img-scrollers"></img>
          </div>
        </div>
        <Thumbnails setCurrent={setCurrent} />
      </div>
    </div>
  );
}
