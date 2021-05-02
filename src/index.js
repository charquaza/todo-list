import {createTodo, removeTodo, createProject, removeProject, projectList, currProjectIndex} from "./todo.js";
import {updateDOM} from "./updateDOM.js";

//pass in projects from localStorage as argument
//hard code projects for now
//clean up holes in projects array

var project1 = {title: "project 1", todos: [{title: "first todo"}, {title: "second todo"}]};
projectList = [project1];

updateDOM.buildDOM();