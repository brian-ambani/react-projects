import styles from "./App.module.css";
import { useState } from "react";
import AddTodo from "./components/addTodo/AddTodo";
import DisplayTodos from "./components/displayTodo/DisplayTodos";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); // [{id: 1, text: "todo1"}, {id: 2, text: "todo2"}

  return (
    <div className={styles.App}>
      <AddTodo todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <DisplayTodos inputText={inputText} />
    </div>
  );
}

export default App;
