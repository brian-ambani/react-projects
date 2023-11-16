import React, { useContext } from "react";
import { Data, Data1 } from "./AppContext";

export default function ComponentC() {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <div>
      <h3>
        My name is {name} & I am {age} years old
      </h3>
    </div>
  );
}
