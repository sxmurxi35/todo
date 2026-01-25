import { newTodoDialog, newProjectDialog } from "./newDialogs";
import { deleteTodo } from "./storage.js";

const newTodoBtn = document.querySelector(".add-btn");
newTodoBtn.addEventListener("click", () => {
  newTodoDialog();

  const checkProj = document.querySelector("#check-project");
  checkProj.addEventListener("change", () => {
    const selectProj = document.querySelector("#todo-projects");
    const labelProj = document.querySelector("#todo-projects-label");
    selectProj.classList?.toggle("hidden");
    labelProj.classList?.toggle("hidden");
  });
});

const newProjectBtn = document.querySelector(".new-project-btn");
newProjectBtn.addEventListener("click", () => {
  newProjectDialog();
});

const contentSect = document.querySelector(".page-content");
contentSect.addEventListener("click", (e) => {
  if (e.target.classList.contains("del-btn")) {
    const todoID = e.target.closest(".todo-sect").dataset.id;

    deleteTodo(todoID);
  }
});
