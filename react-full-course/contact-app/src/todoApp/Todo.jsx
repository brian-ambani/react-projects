import { useState } from "react";
import "./todo.css";

const generateId = () => Math.floor(Math.random() * 1000);

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo"
        />

        <button onClick={handleSubmit}>Submit</button>
        <ul className="todo-list">
          {todos.map(({ todo, id }) => {
            return (
              <li key={id} className="todo">
                <span>{todo}</span>
                <button className="close" onClick={() => removeTodo(id)}>
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
