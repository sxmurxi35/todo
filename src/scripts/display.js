import "../styles/all.css";
import { createTodo } from "./createTodo";
import binIcon from "../icons/bin.svg";
import infoIcon from "../icons/info.svg";

const contentSect = document.querySelector(".content");
function loadAll() {
  contentSect.textContent = "";
  loadTodo();
}

createTodo("test", "testtest", "high", "2021-01-12", null);
createTodo("test", "testtest", "low", "2021-01-12", null);
createTodo("test", "Cyberpunk is peak", "medium", "2077-01-01", null);

function loadTodo() {
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
    delBtn.id = 'delBtn'

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
    contentSect.append(todoSect);
  }
}

function createPara(text) {
  const para = document.createElement("p");
  para.textContent = text;
  return para;
}

export { loadAll };
