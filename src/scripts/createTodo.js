import createID from "./utils/id";

export default class Todo {
  constructor(name, desc, priority, dueDate, projectID, isComplete) {
    this._name = name;
    this._desc = desc;
    this._priority = priority;
    this._dueDate = dueDate;
    this._projectID = projectID;
    this._isComplete = isComplete;
    this._id = createID();
  }
}