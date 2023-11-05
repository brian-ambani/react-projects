import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="container">
      <nav>
        <div className="logo">React</div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
