import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const TaskItem = ({ todo, deleteTask }) => {
  return (
    <div>
      <li>
        <div>
          <p>{todo.taskName}</p>
        </div>

        <MdDeleteSweep
          style={{ cursor: "pointer" }}
          onClick={() => deleteTask(todo.taskName)}
        />
      </li>
    </div>
  );
};

export default TaskItem;
