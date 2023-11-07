import React from "react";
import { useState } from "react";

import { faTrashAlt } from "react-icons/fa";

export default function Content() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  return (
    <div className="content">
      <main>
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input type="checkbox" checked={item.checked} />
              <label>{item.item}</label>
              <faTrashAlt role="button" tabIndex="0" />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
