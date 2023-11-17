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

  const deleteTask = (deleteTaskName) => {
    setTodoList(todoList.filter((todo) => todo.taskName !== deleteTaskName));
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput addTask={addTask} deleteTask={deleteTask} />
      <div>
        <ul>
          {todoList.map((todo) => (
            <TaskItem todo={todo} />
          ))}
        </ul>
        {todoList.length === 0 ? <p>You are done!</p> : null}
      </div>
    </div>
  );
}

export default App;
