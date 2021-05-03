import {todo} from "./todo.js";
import {updateDOM} from "./updateDOM.js";

todo.loadProjectsFromStorage();

updateDOM.setUpListeners();

updateDOM.displayStoredProjects();
