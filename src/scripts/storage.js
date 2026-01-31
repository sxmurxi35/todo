import Todo from "./createTodo";
import Project from "./createProject";

const todoArray = [];

function setTodo(name, desc, priority, due, projectID, isComplete) {
  const todo = new Todo(name, desc, priority, due, projectID, isComplete);

  todoArray.push(todo);
  localStorage.setItem("todo", JSON.stringify(todoArray));
}

function getTodos() {
  const todoArray = JSON.parse(localStorage.getItem("todo"));
  return todoArray;
}

function deleteTodo(id) {
  const storedArray = localStorage.getItem("todo");
  const todoArray = JSON.parse(storedArray);
  const todoIndex = todoArray.map((todo) => todo._id).indexOf(id);

  todoArray.splice(todoIndex, 1);
  localStorage.removeItem("todo");
  localStorage.setItem("todo", JSON.stringify(todoArray));
}

function changeStatusTodo(id) {
  const storedArray = localStorage.getItem("todo");
  const todoArray = JSON.parse(storedArray);
  const todoIndex = todoArray.map((todo) => todo._id).indexOf(id);

  todoArray[todoIndex]._isComplete = true;

  localStorage.setItem("todo", JSON.stringify(todoArray));
}

const projectsArray = [];

function setProject(name) {
  const project = new Project(name);

  projectsArray.push(project);
  localStorage.setItem("projects", JSON.stringify(projectsArray));
}

function getProjects() {
  const projectsArray = JSON.parse(localStorage.getItem("projects"));
  return projectsArray;
}

export { setTodo, getTodos, deleteTodo, changeStatusTodo, setProject, getProjects };
