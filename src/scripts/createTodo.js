class Todo {
  constructor(name, desc, priority, dueDate, projectID, isComplete) {
    this._name = name;
    this._desc = desc;
    this._priority = priority;
    this._dueDate = dueDate;
    this._projectID = projectID;
    this._isComplete = isComplete;
    this._id = createID();
  }

  get name() {
    return this._name;
  }

  get desc() {
    return this._desc;
  }

  get priority() {
    return this._priority;
  }

  get dueDate() {
    return this._dueDate;
  }

  get projectID() {
    return this._projectID;
  }

  get id() {
    return this._id;
  }

  get status() {
    return this._isComplete;
  }
}

function createID() {
  const generateID = Math.random().toString(16).substring(2);

  return "id_" + generateID;
}

const todoArray = [];

function createTodo(name, desc, priority, due, projectID, isComplete) {
  const todo = new Todo(name, desc, priority, due, projectID, isComplete);

  todoArray.push(todo);
  localStorage.setItem("todo", JSON.stringify(todoArray));
}


export { createTodo };
