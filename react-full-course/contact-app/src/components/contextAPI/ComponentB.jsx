import React from "react";
import { Data } from "./ComponentA";

export default function ComponentB() {
  return (
    <div>
      <Data.Consumer>
        {(name) => {
          return <h1>My name is: {name}</h1>;
        }}
      </Data.Consumer>
    </div>
  );
}
