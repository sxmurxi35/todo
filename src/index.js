import "./styles/style.css";
import { loadAll, loadImp, loadToday } from "./scripts/display.js";
import "./scripts/events.js";

loadAll();

const pageBtn = document.querySelectorAll(".page-btn");

pageBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const contentSect = document.querySelector(".content");
    contentSect.innerHTML = "";
    pageBtn.forEach((btn) => {
      btn.classList?.remove("selected");
    });
    btn.classList.add("selected");

    const btnID = btn.id;
    switch (btnID) {
      case "all-btn":
        loadAll();
        break;

      case "today-btn":
        loadToday()
        break;

      case "impor-btn":
        loadImp();
        break;

      case "comply-btn":
        break;
    }
  });
});
