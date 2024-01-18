// TodoForm.js
import React, { useState } from "react";

const TodoForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    onAddTask({ text: task, completed: false });
    setTask(""); // Clear the input field after adding the task
  };

  return (
    <div className="form_main_container">
      <form onSubmit={handleAddTask}>
        <label htmlFor="task">Add a new task: </label>
        <input
          id="task"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
