import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const calculateValue = () => {
    let answers = eval(inputValue);
    setInputValue(answers);
  };

  const clearValue = () => {
    setInputValue("");
  };

  return (
    <div>
      <form className="calculator">
        <input type="text" className="value" value={inputValue} />
        <span className="num clear" onClick={() => clearValue()}>
          C
        </span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span onClick={() => display("+")} className="plus">
          +
        </span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span onClick={() => calculateValue()} className="num equal">
          =
        </span>
      </form>
    </div>
  );
}

export default App;
