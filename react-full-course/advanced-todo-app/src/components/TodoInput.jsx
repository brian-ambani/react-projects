import React, { useState } from "react";

export default function TodoInput() {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const addTask = (e) => {
    e.preventDefault();

    // clear the input field
    setTask("");
  };
  return (
    <div>
      <form onSubmit={addTask}>
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
