import React from "react";

export default function ({ name, role }) {
  return (
    <div>
      <h3>{name}</h3>
      {role ? <p>{role}</p> : <p>No role</p>}
      {/* <p>{role ? role : "No role"}</p> an alternative to the above */}
    </div>
  );
}
