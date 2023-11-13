import React from "react";

export default function Lists() {
  const names = ["John", "Paul", "George", "Ringo"];
  return (
    <div>
      {names.map((name) => {
        return <h1>{name}</h1>;
      })}
    </div>
  );
}
