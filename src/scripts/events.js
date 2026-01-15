import { newTodoDialog, newProjectDialog } from "./newDialogs";

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
