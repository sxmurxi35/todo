class createTodo {
  constructor(name, desc, priority, dueDate, projectID) {
    this._name = name;
    this._desc = desc;
    this._priority = priority;
    this._dueDate = dueDate;
    this._projectID = projectID;
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
}

function createID() {
  const generateID = Math.random().toString(16).substring(2);

  return "id_" + generateID;
}
