import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);

  const subCount = () => setCount(count - 1);

  const resetCount = () => setCount(0);

  return (
    <div>
      <h1 onClick={addCount}>+</h1>
      <h1>{count}</h1>
      <h1 onClick={subCount}>-</h1>
      <h1 onClick={resetCount}>Reset</h1>
    </div>
  );
}
