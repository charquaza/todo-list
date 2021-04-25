import {createTodo, createProject, projectList} from "./todo.js";
import {updateDOM} from "./updateDOM.js";

//pass in projects from localStorage as argument
//hard code projects for now
var project1 = {title: "project 1", todos: [{title: "first todo"}, {title: "due now"}]};
projectList = [project1];
updateDOM.buildDOM(projectList);

// //set up event listeners
// var newProjectBtn = document.querySelector("button.new-project");
// newProjectBtn.addEventListener("click", updateDOM.showCreateProjectForm);

// var createProjectBtn = document.querySelector("button.create-project");
// createProjectBtn.addEventListener("click", function callCreate() {
//     var projectNameInput = document.querySelector("input#project-name");
//     createProject(projectNameInput.value);
//     updateDOM.addToProjectList(projectNameInput.value);
//     updateDOM.hideCreateProjectForm();
// });

// var cancelProjectBtn = document.querySelector("button.cancel-project");
// cancelProjectBtn.addEventListener("click", updateDOM.hideCreateProjectForm);

// var deleteProjectBtns = document.querySelectorAll("project-list button");
// deleteProjectBtns.forEach(function(deleteBtn) {
//     deleteBtn.addEventListener("click", );
// });

// var newTodoBtn = document.querySelector("button.new-todo");