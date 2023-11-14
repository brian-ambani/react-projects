import React, { Children } from "react";

export default function User({ img, name, age, role, realData, children }) {
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{role}</h3>
      <h1>{realData.name}</h1>
      <h1>{realData.location}</h1>
      {children}
    </div>
  );
}
