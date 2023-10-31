import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">Logo</div>
      <div className="nav__links">
        <div className="nav__link">Home</div>
        <div className="nav__link">About</div>
        <div className="nav__link">Pricing</div>
        <div className="nav__link">
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
}
