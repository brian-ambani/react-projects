import React, { useState } from "react";

export const Hook3 = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Name : {name}</h2>
    </div>
  );
};
