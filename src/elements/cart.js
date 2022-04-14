import Delete from "../images/icon-delete.svg";
import Button from "./button";
import Image1 from "../images/image-product-1-thumbnail.jpg";
import { useState } from "react";
import Close from "../images/icon-close.svg";

export default function Cart({ showCart, items, setItems }) {
  return (
    <div className="cart-item">
      {/* cart header */}
      <div className="cart-header-container">
        <h3 className="cart-header">Cart</h3>
        <img
          src={Close}
          className="close cart-close"
          onClick={(e) => showCart(false)}
        ></img>
      </div>
      {/* cart content */}
      {items === null && (
        <div className="cart-item-no-content">Your cart is empty.</div>
      )}
      {items && (
        <div>
          <div className="cart-content">
            {/* image */}
            <div className="cart-content-img">
              <img src={Image1} className="cart-img"></img>
              {/* title, total-price */}
              <div className="cart-description">
                <p>{items.name}</p>
                <p>
                  {items.price}x {items.numberOfItems}{" "}
                  <span className="cart-item-total">
                    ${items.numberOfItems * items.price}
                  </span>
                </p>
              </div>
              {/* delete icon */}
            </div>
            <img
              src={Delete}
              className="icon"
              onClick={(e) => setItems(null)}
            ></img>
          </div>

          {/* button */}
          <div className="cart-control">
            <Button title="Checkout"> </Button>
          </div>
        </div>
      )}
    </div>
  );
}
