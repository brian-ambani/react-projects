import React, { useEffect, useRef, useState } from "react";

// useRef => allows us to access DOM elements and create mutable variables
// useRef => allows us to access DOM elements and create mutable variables

export const Hook3 = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  const inputElement = useRef(null);

  const handleClick = () => {
    console.log(inputElement);
    inputElement.current.style.width = "300px";
    inputElement.current.focus();
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Name : {name}</h2>
      <h2>Count : {count.current}</h2>
      <br />

      <input ref={inputElement} />
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};
