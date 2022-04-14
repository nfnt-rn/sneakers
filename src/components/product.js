import Cart from "../images/icon-cart-white.svg";

import Button from "../elements/button";
import Meter from "../elements/meter";
import { useState } from "react";

export default function Product({ showCart, setItems }) {
  const [count, setCount] = useState(0);
  return (
    <div className="product">
      {/* sneaker company */}
      <h4 className="product-title">SNEAKER COMPANY</h4>
      {/* product name */}
      <h1 className="product-name">Fall Limited Edition Sneakers</h1>
      <p className="product-description">
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      {/* para  */}

      {/* price tag with discount */}
      <div className="product-price">
        <div className="product-price-discount">
          <p>$125.00</p>
          <p className="product-price-discount-value">50%</p>
        </div>
        <p className="product-price-orig">$250.00</p>
      </div>
      {/* striked out */}
      {/* meter */}
      <div className="desktop-controls">
        <Meter count={count} setCount={setCount}></Meter>
        {/* button */}
        <Button
          title="Add to cart"
          icon={Cart}
          disabled={count === 0}
          onClick={(e) => {
            setItems({
              name: "Limited Edition Sneakers",
              price: 125,
              numberOfItems: count,
            });
            showCart(true);
          }}
        ></Button>
      </div>
    </div>
  );
}
