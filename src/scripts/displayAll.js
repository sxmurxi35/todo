import "../styles/all.css";
import { newProjectDialog } from "./newDialogs";

function loadAll() {
  const contentSect = document.querySelector(".page-content");

  const newProjectBtn = document.querySelector(".add-btn");
  newProjectBtn.addEventListener("click", () => {
    newProjectDialog();

    const checkProj = document.querySelector("#check-project");
    checkProj.addEventListener("change", () => {
      const selectProj = document.querySelector("#todo-projects");
      const labelProj = document.querySelector("#todo-projects-label");
      selectProj.classList?.toggle("hidden");
      labelProj.classList?.toggle("hidden");
    });
  });
}

export default loadAll;
