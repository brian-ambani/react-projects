import React, { createContext } from "react";
import ComponentC from "./ComponentC";

export const Data = createContext();
export const Data1 = createContext();

export default function AppContext() {
  const name = "Brain Ambani";
  const age = 25;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentC />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
}
