import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TaskItem from "./components/TaskItem";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTask = (taskName) => {
    // creating a newTodo
    const newTask = { taskName };

    // Adding the newTodo to the list
    setTodoList([...todoList, newTask]);
  };
  return (
    <div className="App">
      <h1>Hello React</h1>
      <TodoInput addTask={addTask} />

      <ul>
        <li>
          {todoList.map((todo) => (
            <TaskItem todo={todo} />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default App;
