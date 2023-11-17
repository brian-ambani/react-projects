import React from "react";
import { MdDeleteSweep } from "react-icons/md";

const TaskItem = ({ todo, deleteTask }) => {
  const handleDelete = () => deleteTask(todo.taskName);

  return (
    <div>
      <li>
        <div>
          <p>{todo.taskName}</p>
        </div>

        <MdDeleteSweep style={{ cursor: "pointer" }} onClick={handleDelete} />
      </li>
    </div>
  );
};

export default TaskItem;
