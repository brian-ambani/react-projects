import React from "react";

export default function TaskItem({ todo }) {
  return (
    <div>
      <h3>{todo.taskName}</h3>
    </div>
  );
}
