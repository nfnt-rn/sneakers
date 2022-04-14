import React from "react";
import Menu from "../images/icon-menu.svg";
import Cart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import Logo from "../images/logo.svg";

export default function sneakers({ setSidebar, showCart, cart }) {
  return (
    <div className="navbar">
      <div className="navbar-child">
        <img
          src={Menu}
          alt="menu"
          className="menu"
          onClick={(e) => setSidebar(true)}
        />
        <img src={Logo} alt="logo" className="logo" />
        <ul className="desktop-nav">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-child">
        <img
          src={Cart}
          alt="cart"
          className="cart-svg"
          onClick={(e) => showCart(!cart)}
        />
        <img src={Avatar} alt="avatar" className="avatar" />
      </div>
    </div>
  );
}
