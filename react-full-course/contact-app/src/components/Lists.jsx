import React from "react";

export default function Lists() {
  const names = ["John", "Paul", "George", "Ringo"];
  return (
    <div>
      {names.map((name) => {
        return <h2 key={Math.random() * 10}>{name}</h2>;
      })}
    </div>
  );
}
