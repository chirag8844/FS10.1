const API_URL = "http://localhost:5000/api/todos";

export async function getTodos() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addTodo(title) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return res.json();
}

export async function toggleTodo(id, completed) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  return res.json();
}

export async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
