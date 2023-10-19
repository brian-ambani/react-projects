import styles from "./App.module.css";
import { useState } from "react";
import AddTodo from "./components/addTodo/AddTodo";
import DisplayTodos from "./components/displayTodo/DisplayTodos";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className={styles.App}>
      <AddTodo setInputText={setInputText} />
      <DisplayTodos inputText={inputText} />
    </div>
  );
}

export default App;
