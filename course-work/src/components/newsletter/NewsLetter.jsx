import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="newsletter">
      <div className="container">
        <h1>NOTIFY ME OF NEW OFFERS</h1>
        <form>
          <input className="input" placeholder="Email" type="text" />
          <input className="input_btn" type="button" value="NOTIFY ME" />
        </form>
      </div>
    </div>
  );
}
