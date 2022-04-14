import React from "react";
import Close from "../images/icon-close.svg";

export default function Sidebar({ setSidebar }) {
  return (
    <div className="backdrop">
      <div className="sidebar-modal">
        <img
          src={Close}
          className="close "
          onClick={(e) => setSidebar(false)}
        ></img>
        <ul className="menus">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
