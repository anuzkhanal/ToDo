// TodoList.js
import React from "react";

const TodoList = ({
  tasks,
  addTask,
  deleteTask,
  toggleComplete,
  clearCompleted,
}) => {
  return (
    <div className="list_main_container">
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
