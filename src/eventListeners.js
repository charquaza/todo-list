import {todo} from "./todo.js";
import {updateDOM} from "./updateDOM.js";

var handlers = {
    createProjectHandler() {
        var projectTitleInput = document.querySelector("input#project-title");
        var newProject = todo.createProject(projectTitleInput.value); 

        updateDOM.addToProjectList(newProject, todo.projectList.length - 1);
        updateDOM.hideCreateProjectForm();
    },
    
    deleteProjectHandler(e) {
        var projectIndex = Number(e.target.getAttribute("data-index"));
        todo.removeProject(projectIndex);
    
        var projectElem = document.querySelector(`ul.project-list > li[data-index="${projectIndex}"]`);
        updateDOM.removeFromProjectList(projectElem);
 
        //if deleting current project, remove header and todos from DOM display 
        if (projectIndex === todo.currProjectIndex) {
            updateDOM.clearHeaderAndTodos();
        }
    },

    switchProjectHandler(e) {
        var projectTitleElem = e.target;
        var projectLiElem = projectTitleElem.parentElement;
        var projectIndex = Number(projectLiElem.getAttribute("data-index"));

        if (projectIndex !== todo.currProjectIndex) {
            todo.currProjectIndex = projectIndex;

            updateDOM.switchProjects(todo.projectList[todo.currProjectIndex]);
        }
    },

    createTodoHandler() {
        var todoInputs = document.querySelectorAll("div.create-todo-form input");
        var todoInputValues = Array.from(todoInputs, function getValue(input) {
            return input.value;
        });
        var newTodo = todo.createTodo(...todoInputValues); 

        var currProject = todo.projectList[todo.currProjectIndex];
        updateDOM.addToTodoList(newTodo, currProject.todos.length - 1);
        updateDOM.hideCreateTodoForm();
    },
    
    deleteTodoHandler(e) {
        var todoIndex = Number(e.target.getAttribute("data-index"));
        todo.removeTodo(todoIndex);
    
        var todoElem = document.querySelector(`ul.todo-list > li[data-index="${todoIndex}"]`);
        updateDOM.removeFromTodoList(todoElem);
    }
};

export {handlers};
