import React, { useEffect, useState } from "react";

export default function HookCounterOne() {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <button
        onClick={() => {
          setCounter(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
