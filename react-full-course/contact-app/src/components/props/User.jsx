import React from "react";

export default function User({ img, name, age, role, nationality }) {
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{role}</h3>
      <h3>{nationality}</h3>
    </div>
  );
}
