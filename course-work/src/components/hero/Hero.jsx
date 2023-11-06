import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_content">
          <h4>Flin Tech</h4>
          <h1>Web Development Projects For Every Business</h1>
          <p>
            Leading web development company dedicated to turning your digital
            dreams into reality.
          </p>
          <button>
            <a href="#">Get Started</a>
          </button>
        </div>
        <div className="hero_stats"></div>
      </div>
    </div>
  );
}
