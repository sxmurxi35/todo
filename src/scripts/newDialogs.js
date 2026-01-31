import { setTodo, setProject, getProjects } from "./storage.js";
import moment from "moment";
import "../styles/dialogs.css";
import { render, renderProjects } from "./display.js";

function newTodoDialog() {
  const dialogWindow = document.createElement("dialog");

  const form = createForm("new-todo");
  form.method = "dialog";
  form.classList.add("todo-form");

  const heading = document.createElement("h3");
  heading.textContent = "Create new todo!";

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
    "check-project",
  );

  const labelProj = createLabel("todo-projects", "Project");
  const selectProj = document.createElement("select");
  selectProj.name = "todo-projects";
  selectProj.id = "todo-projects";
  selectProj.classList.add("hidden");
  labelProj.classList.add("hidden");
  labelProj.id = "todo-projects-label";

  const projects = getProjects();
  if (projects != null) {
    for (let i = 0; i < projects.length; i++) {
      const option = document.createElement("option");
      option.value = projects[i]._id;
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

  const submitBtn = document.createElement("button");
  submitBtn.id = "submit-btn";
  submitBtn.textContent = "Add";

  const formAppend = [
    heading,
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
    submitBtn,
  ];

  formAppend.forEach((field) => {
    form.append(field);
  });
  dialogWindow.append(form);

  const contentSect = document.querySelector(".page-content");
  contentSect.append(dialogWindow);
  dialogWindow.showModal();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    todoSubmit();
  });
}

function newProjectDialog() {
  const dialogWindow = document.createElement("dialog");

  const form = createForm("new-project");

  form.classList.add("project-form");

  const heading = document.createElement("h3");
  heading.textContent = "Create new project!";

  const labelName = createLabel("project-name", "Name");
  const inputName = createInput("text", "todo-project", "todo-project");

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Create";

  const formAppend = [heading, labelName, inputName, submitBtn];

  formAppend.forEach((field) => {
    form.append(field);
  });
  dialogWindow.append(form);

  const contentSect = document.querySelector(".page-content");
  contentSect.append(dialogWindow);
  dialogWindow.showModal();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    projectSubmit();
  });
}

function todoSubmit() {
  const dialogWindow = document.querySelector("dialog");
  const todoName = document.querySelector("#todo-name").value;
  const todoDesc = document.querySelector("#todo-desc").value;
  const todoPriority = document.querySelector("#todo-priority").value;
  let todoDue = document.querySelector("#todo-due").value;
  let todoProject = document.querySelector("#todo-projects").value;

  if (todoDue == "") {
    todoDue = moment().format("L");
  } else if (todoDue) {
    todoDue = moment(todoDue).format("L");
  }

  console.log(todoName, todoDesc, todoPriority, todoDue, todoProject);
  setTodo(todoName, todoDesc, todoPriority, todoDue, todoProject);
  dialogWindow.close();
  dialogWindow.remove();
  render()
}

function projectSubmit() {
  const dialogWindow = document.querySelector("dialog");
  const projectName = document.querySelector("#todo-project").value;

  console.log(projectName);
  setProject(projectName);
  dialogWindow.close();
  dialogWindow.remove();
  renderProjects();
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
  form.method = "dialog";
  form.name = name;

  return form;
}

export { newTodoDialog, newProjectDialog };
