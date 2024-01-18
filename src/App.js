// App.js
import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

import useTasks from "./hooks/useTasks";

function App() {
  const { tasks, addTask, deleteTask, toggleComplete, clearCompleted } =
    useTasks([]);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App_main_container">
          <TodoForm onAddTask={addTask} />
          <TodoList
            tasks={tasks}
            addTask={addTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            clearCompleted={clearCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
