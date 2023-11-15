import React, { createContext } from "react";
import ComponentB from "./ComponentB";

// create instance of (createContext)
export const Data = createContext();

export default function ComponentA() {
  const name = "King Brain";
  return (
    //  Wrap the component inside a provider
    <div>
      <Data.Provider value={name}>
        <ComponentB />
      </Data.Provider>
    </div>
  );
}
