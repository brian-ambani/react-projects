import React from "react";

export default function (props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.role ? props.role : "No roles"}</p>
    </div>
  );
}
