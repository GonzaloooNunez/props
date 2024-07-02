import React from "react";

const Task = ({ id, text, completed, deleteTask, toggleComplete }) => {
  return (
    <li
      style={{ textDecoration: completed ? "line-through" : "none" }}
      onClick={() => toggleComplete(id)}
    >
      {text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(id);
        }}
      >
        Borrar
      </button>
    </li>
  );
};

export default Task;
