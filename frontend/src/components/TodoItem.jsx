import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
    >
      <span>{todo.title}</span>
      <div>
        <button onClick={() => toggleComplete(todo._id, todo.completed)}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
