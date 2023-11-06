import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#">Flin Tech</a>
        </div>
        <div className="main-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
