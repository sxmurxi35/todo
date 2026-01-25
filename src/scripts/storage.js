import { loadAll } from "./display";

function deleteTodo(id) {
  const storedArray = localStorage.getItem("todo");
  const todoArray = JSON.parse(storedArray);
  const todoIndex = todoArray.map((todo) => todo._id).indexOf(id);

  todoArray.splice(todoIndex, 1);
  localStorage.removeItem("todo");
  localStorage.setItem("todo", JSON.stringify(todoArray));
  loadAll();
}

export { deleteTodo };
