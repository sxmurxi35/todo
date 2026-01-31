import "../styles/all.css";
import binIcon from "../icons/bin.svg";
import infoIcon from "../icons/info.svg";
import tickIcon from "../icons/tick.svg";
import moment from "moment";
import { getProjects, getTodos, setTodo } from "./storage";

const contentSect = document.querySelector(".content");

let currentDisplay = {
  mode: "all",
  projectID: null,
};

function loadAll() {
  currentDisplay.mode = "all";
  render();
}

function loadImp() {
  currentDisplay.mode = "important";
  render();
}

function loadToday() {
  currentDisplay.mode = "today";
  render();
}

function loadComplete() {
  currentDisplay.mode = "completed";
  render();
}

function loadProject(id) {
  currentDisplay.mode = "project";
  currentDisplay.projectID = id;
  render();
}

const date = moment().format("L");

setTodo("test", "testtest", "high", "02/25/2026", null, false);
setTodo("test", "testtest", "low", date, null, false);
setTodo("test", "Cyberpunk is peak", "medium", date, null, false);
setTodo("testy", "Cyberpunk is peak", "high", date, null, true);

function render() {
  const visibleTodosArray = getVisibleTodos();
  loadTodo(visibleTodosArray);
}

function getVisibleTodos() {
  const mode = currentDisplay.mode;
  const projectID = currentDisplay.projectID;

  const todoArray = getTodos();

  let visibleTodosArray = [];

  for (let i = 0; i < todoArray.length; i++) {
    const status = todoArray[i]._isComplete;
    const dueDate = todoArray[i]._dueDate;
    const priority = todoArray[i]._priority;
    const projID = todoArray[i]._projectID;

    if (mode == "all" && !status) {
      visibleTodosArray.push(todoArray[i]);
    }

    if (mode == "important" && priority == "high" && !status) {
      visibleTodosArray.push(todoArray[i]);
    }

    if (mode == "completed" && status) {
      visibleTodosArray.push(todoArray[i]);
    }

    if (mode == "today" && dueDate == moment().format("L")) {
      visibleTodosArray.push(todoArray[i]);
    }

    if (mode == "project" && projectID == projID) {
      visibleTodosArray.push(todoArray[i]);
    }
  }
  return visibleTodosArray;
}

function loadTodo(array) {
  contentSect.textContent = "";

  for (let i = 0; i < array.length; i++) {
    const todoSect = document.createElement("section");
    const name = createPara(array[i]._name);
    const priority = array[i]._priority;
    const dueDate = createPara(array[i]._dueDate);
    const id = array[i]._id;
    const projID = array[i]._projectID;
    const status = array[i]._isComplete;
    const delBtn = createButton(binIcon, "del-btn");
    delBtn.id = "delBtn";

    const infoBtn = createButton(infoIcon, "info-btn");

    const statusBtn = createButton(tickIcon, "status-btn");

    const btnSect = document.createElement("section");
    btnSect.classList.add("act-btn-sect");
    btnSect.append(statusBtn, infoBtn, delBtn);

    if (status) {
      todoSect.classList.add("completed");
    }

    todoSect.append(name, dueDate, btnSect);
    todoSect.classList.add(priority, "todo-sect");
    todoSect.dataset.id = id;
    contentSect.append(todoSect);
  }
}

function renderProjects() {
  getProject();
}

function getProject() {
  const projectsArray = getProjects();

  const container = document.querySelector(".projects-btns");

  for (let i = 0; i < projectsArray.length; i++) {
    const projectBtn = document.createElement("button");
    projectBtn.dataset.id = projectsArray[i]._id;
    projectBtn.textContent = projectsArray[i]._name;
    projectBtn.classList.add("page-btn");

    container.append(projectBtn);
  }
}

function createPara(text) {
  const para = document.createElement("p");
  para.textContent = text;
  return para;
}

function createButton(src, className) {
  const btn = document.createElement("button");
  const btnIcon = document.createElement("img");
  btnIcon.src = src;
  btn.append(btnIcon);
  btn.classList.add("act-btn", className);
  btnIcon.classList.add(className);
  return btn;
}

export { loadAll, loadImp, loadToday, loadComplete, loadProject, render, renderProjects };
