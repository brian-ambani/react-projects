import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>Kings Blog</h3>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </div>
  );
}
