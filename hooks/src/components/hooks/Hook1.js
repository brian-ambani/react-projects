import React, { useState } from "react";

export const Hook1 = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const HandleValue = (e) => setValue(e);

  const handleChange = () => setCount(count + 1);

  return (
    <div>
      <h1>useStateHook</h1>
      <h2>
        <input
          type="text"
          value={value}
          onChange={(e) => HandleValue(e.target.value)}
        />
        <br></br>
        {value} has clicked Count {count} times!!!
      </h2>
      <button onClick={handleChange}>+ Increase</button>
      {/* Input with time text */}
    </div>
  );
};
