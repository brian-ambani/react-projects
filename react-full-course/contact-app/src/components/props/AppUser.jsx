import React from "react";
import User from "./User";

export default function AppUser() {
  return (
    <div>
      <h1>Hello from Props</h1>
      <User
        img="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=200"
        name="Brian"
        age={70}
        role="Fullstack developer"
        realData={{ name: "Mike", location: "Kenya" }}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          voluptates explicabo odio, iure et odit maxime distinctio rerum
          officia dicta!
        </p>
      </User>
    </div>
  );
}
