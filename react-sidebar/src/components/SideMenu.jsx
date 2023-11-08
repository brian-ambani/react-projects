import React from "react";
import nb from "../assets/nb.png";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <div className="top-section">
        <div className="logo">
          <img src={nb} alt="logo" />
        </div>
        <div className="toggle-menu-btn">
          <i class="bi bi-arrow-left-square-fill"></i>
        </div>
      </div>
      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}
