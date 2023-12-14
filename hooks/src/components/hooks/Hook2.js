import React, { useState, useEffect } from "react";

export const Hook2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} new Messsages!`;
  });
  return (
    <div>
      <h1>useEffectHook</h1>
      <h2>{count} new Messsages!</h2>
      <button onClick={() => setCount(count + 1)}>+ Increase</button>
    </div>
  );
};
