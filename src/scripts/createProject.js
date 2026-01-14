class Project {
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

const projectsArray = [];

function createProject(name) {
  const project = new Project(name);

  projectsArray.push(project);
  localStorage.setItem("projects", JSON.stringify(projectsArray));
}

export { createProject };
