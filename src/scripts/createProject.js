export default class createProject {
  constructor(name) {
    this._name = name;
    this._id = createID();
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }
}

function createID() {
  const generateID = Math.random().toString(16).substring(2);

  return "id_" + generateID;
}
