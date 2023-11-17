import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTask = (taskName) => {
    // creating a newTodo
    const newTask = { taskName };

    // Adding the newTodo to the list
    setTodoList([...todoList, newTask]);
  };
  console.log(todoList);
  return (
    <div className="App">
      <h1>Hello React</h1>
      <TodoInput addTask={addTask} />
    </div>
  );
}

export default App;
