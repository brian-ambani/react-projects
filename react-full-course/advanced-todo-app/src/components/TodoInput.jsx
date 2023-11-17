import React, { useState } from "react";

export default function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(task);
    // clear the input field
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="New todo"
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}
