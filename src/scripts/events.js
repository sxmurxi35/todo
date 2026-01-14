import { newTodoDialog } from "./newDialogs";

const newProjectBtn = document.querySelector(".add-btn");
newProjectBtn.addEventListener("click", () => {
  newTodoDialog();

  const checkProj = document.querySelector("#check-project");
  checkProj.addEventListener("change", () => {
    const selectProj = document.querySelector("#todo-projects");
    const labelProj = document.querySelector("#todo-projects-label");
    selectProj.classList?.toggle("hidden");
    labelProj.classList?.toggle("hidden");
  });
});
