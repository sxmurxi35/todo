import createID from "./utils/id";

export default class Project {
  constructor(name) {
    this._name = name;
    this._id = createID();
  }
}
