import "../styles/all.css";
import { createTodo } from "./createTodo";
import binIcon from "../icons/bin.svg";
import infoIcon from "../icons/info.svg";
import moment from "moment";

const contentSect = document.querySelector(".content");
function loadAll() {
  contentSect.textContent = "";
  loadTodo("all");
}

function loadImp() {
  contentSect.textContent = "";
  loadTodo("imp");
}

function loadToday() {
  contentSect.textContent = "";
  loadTodo("today");
}

const date = moment().format("L");

createTodo("test", "testtest", "high", '02/25/2026', null, false);
createTodo("test", "testtest", "low", date, null, false);
createTodo("test", "Cyberpunk is peak", "medium", date, null, false);

function loadTodo(mode) {
  const todoArray = JSON.parse(localStorage.getItem("todo"));

  for (let i = 0; i < todoArray.length; i++) {
    const todoSect = document.createElement("section");
    const name = createPara(todoArray[i]._name);
    const priority = todoArray[i]._priority;
    const dueDate = createPara(todoArray[i]._dueDate);
    const id = todoArray[i]._id;
    const delBtn = document.createElement("button");
    const delIcon = document.createElement("img");
    delIcon.src = binIcon;
    delIcon.classList.add("del-btn");
    delBtn.append(delIcon);
    delBtn.classList.add("act-btn", "del-btn");
    delBtn.id = "delBtn";

    const infoBtn = document.createElement("button");
    const infoIconImg = document.createElement("img");
    infoIconImg.src = infoIcon;
    infoBtn.append(infoIconImg);
    infoBtn.classList.add("act-btn", "info-btn");

    const btnSect = document.createElement("section");
    btnSect.classList.add("act-btn-sect");
    btnSect.append(infoBtn, delBtn);

    todoSect.append(name, dueDate, btnSect);
    todoSect.classList.add(priority, "todo-sect");
    todoSect.dataset.id = id;

    if (mode == "all") {
      contentSect.append(todoSect);
    } else if (mode == "imp" && priority == "high") {
      contentSect.append(todoSect);
    } else if (mode == "today" && todoArray[i]._dueDate == moment().format('L')) {
      contentSect.append(todoSect);
    }
  }
}

function createPara(text) {
  const para = document.createElement("p");
  para.textContent = text;
  return para;
}

export { loadAll, loadImp, loadToday };
