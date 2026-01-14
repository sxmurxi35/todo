import { createProject } from "./createProject";

function newTodoDialog() {
  const dialogWindow = document.createElement("dialog");

  const form = createForm("new-todo");

  const labelName = createLabel("todo-name", "Name");
  const inputName = createInput("text", "todo-name", "todo-name");

  const labelDesc = createLabel("todo-desc", "Description");
  const textDesc = document.createElement("textarea");
  textDesc.name = "todo-desc";
  textDesc.id = "todo-desc";

  const labelPriority = createLabel("todo-priority", "Priority");
  const selectPriority = document.createElement("select");
  selectPriority.name = "todo-priority";
  selectPriority.id = "todo-priority";

  const optLow = document.createElement("option");
  optLow.value = "low";
  optLow.textContent = "Low";

  const optMed = document.createElement("option");
  optMed.value = "medium";
  optMed.textContent = "Medium";

  const optHigh = document.createElement("option");
  optHigh.value = "high";
  optHigh.textContent = "High";
  selectPriority.append(optLow, optMed, optHigh);

  const labelDue = createLabel("todo-due", "Due date");
  const inputDue = createInput("date", "todo-due", "todo-due");

  const labelCheckProj = createLabel("check-project", "Assign to a project?");
  const inputCheckProj = createInput(
    "checkbox",
    "check-project",
    "check-project"
  );

  const labelProj = createLabel("todo-projects", "Project");
  const selectProj = document.createElement("select");
  selectProj.name = "todo-projects";
  selectProj.id = "todo-projects";
  selectProj.classList.add("hidden");
  labelProj.classList.add("hidden");
  labelProj.id = "todo-projects-label";


  const storedProjects = localStorage.getItem("projects");
  const projects = JSON.parse(storedProjects);
  if (projects != null) {
    for (let i = 0; i < projects.length; i++) {
      const option = document.createElement("option");
      option.value = projects[i]._name;
      option.textContent = projects[i]._name;
      selectProj.append(option);
    }
  } else if (projects == null) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Create a project";
    selectProj.append(option);
    selectProj.disabled = true;
  }

  const formAppend = [
    labelName,
    inputName,
    labelDesc,
    textDesc,
    labelPriority,
    selectPriority,
    labelDue,
    inputDue,
    labelCheckProj,
    inputCheckProj,
    labelProj,
    selectProj,
  ];

  formAppend.forEach((field) => {
    form.append(field);
  });
  dialogWindow.append(form);

  const contentSect = document.querySelector(".page-content");
  contentSect.append(dialogWindow);
  dialogWindow.showModal();
}

function createLabel(forId, text) {
  const label = document.createElement("label");
  label.setAttribute("for", forId);

  label.textContent = text;

  return label;
}

function createInput(type, id, name) {
  const input = document.createElement("input");

  input.type = type;
  input.id = id;
  input.name = name;

  return input;
}

function createForm(name) {
  const form = document.createElement("form");
  form.method = "POST";
  form.name = name;

  return form;
}

export { newTodoDialog };
