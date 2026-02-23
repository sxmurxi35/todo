import "./styles/style.css";
import {
  loadAll,
  loadComplete,
  loadImp,
  loadProject,
  loadToday,
  renderProjects,
} from "./scripts/display.js";
import "./scripts/events.js";

loadAll();
renderProjects();

const pageBtn = document.querySelectorAll(".page-btn");

pageBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const contentSect = document.querySelector(".content");
    contentSect.innerHTML = "";
    pageBtn.forEach((btn) => {
      btn.classList?.remove("selected");
    });
    btn.classList.add("selected");

    if (btn.dataset.id != null) {
      const btnDataID = btn.dataset.id;
      loadProject(btnDataID);
    }

    const btnID = btn.id;
    switch (btnID) {
      case "all-btn":
        loadAll();
        break;

      case "today-btn":
        loadToday();
        break;

      case "impor-btn":
        loadImp();
        break;

      case "comply-btn":
        loadComplete();
        break;
    }
  });
});

/*TODO
  - status change if "complete" button pressed on todo ---DONE
  - style dialog windows
  - repair project button styling
  - add new dialog window after 'info' button pressed. dialog should allow user to edit todo
  - somehow reset "assign to a project" value, cuz projects without checked assigning are assigned to a project ---DONE
*/
