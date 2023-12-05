import React, { useState } from "react";

export default function HookCounter() {
  const [count, setCount] = useState(0);

  const countHandler = () => setCount(count + 2);
  return (
    <div>
      <h1>Hook Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={countHandler}>Increament</button>
    </div>
  );
}
