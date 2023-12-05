import React, { useState } from "react";

export default function HookArrays() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add anumber</button>
      {items.map((item) => {
        return <div key={item.id}>{item.value}</div>;
      })}
    </div>
  );
}
