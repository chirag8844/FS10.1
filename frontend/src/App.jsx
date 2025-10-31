import { useState, useEffect } from "react";
import { getTodos, addTodo, toggleTodo, deleteTodo } from "./api";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getTodos().then(setTasks);
  }, []);

  const handleAdd = async () => {
    if (!input.trim()) return;
    const newTask = await addTodo(input);
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const handleToggle = async (id, completed) => {
    const updated = await toggleTodo(id, !completed);
    setTasks(tasks.map(t => (t._id === id ? updated : t)));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div className="container">
      <div className="todo-card">
        <h2>📝 Todo App</h2>
        <div className="input-section">
          <input
            type="text"
            value={input}
            placeholder="Add new task..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.length === 0 ? (
            <p className="empty">No tasks yet. Add one above!</p>
          ) : (
            tasks.map((t) => (
              <li key={t._id} className={t.completed ? "completed" : ""}>
                <span onClick={() => handleToggle(t._id, t.completed)}>
                  {t.title}
                </span>
                <button onClick={() => handleDelete(t._id)}>❌</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
