import {handlers} from "./eventListeners.js";
import {createTodo, removeTodo, createProject, removeProject, projectList, currProjectIndex} from "./todo.js";

//have buildDOM accept projectList so that we don't need to import todo.js
var updateDOM = {
    buildDOM() {
        //set up event listeners for new project form
        var newProjectBtn = document.querySelector("button.new-project");
        newProjectBtn.addEventListener("click", updateDOM.showCreateProjectForm);

        var createProjectBtn = document.querySelector("button.create-project");
        createProjectBtn.addEventListener("click", handlers.createProjectHandler);

        var cancelProjectBtn = document.querySelector("button.cancel-project");
        cancelProjectBtn.addEventListener("click", updateDOM.hideCreateProjectForm);

        //set up event listeners for new todo form
        var newTodoBtn = document.querySelector("button.new-todo");
        newTodoBtn.addEventListener("click", updateDOM.showCreateTodoForm);

        var createTodoBtn = document.querySelector("button.create-todo");
        createTodoBtn.addEventListener("click", handlers.createTodoHandler);

        var cancelTodoBtn = document.querySelector("button.cancel-todo");
        cancelTodoBtn.addEventListener("click", updateDOM.hideCreateTodoForm);

        //populate project and todo columns
        if (projectList) {
            var todoHeader = document.querySelector("div.todo-container > h2");
            todoHeader.textContent = projectList[0].title;

            projectList.forEach(function addProjects(project, index) {
                updateDOM.addToProjectList(project, index);
            });

            //display todos of first project
            projectList[0].todos.forEach(function addTodos(todo, index) {
                updateDOM.addToTodoList(todo, index);
            }); 

            var newTodoBtn = document.querySelector("button.new-todo");
            newTodoBtn.style.display = "block";
        }
    },

    showCreateProjectForm() {
        var newProjectBtn = document.querySelector("button.new-project");
        newProjectBtn.setAttribute("disabled", "");
    
        var createProjectForm = document.querySelector("div.create-project-form");
        createProjectForm.style.display = "block";
    },

    hideCreateProjectForm() {
        var newProjectBtn = document.querySelector("button.new-project");
        newProjectBtn.removeAttribute("disabled");
    
        var projectTitleInput = document.querySelector("input#project-title");
        projectTitleInput.value = "";
    
        var createProjectForm = document.querySelector("div.create-project-form");
        createProjectForm.style.display = "none";
    },

    addToProjectList(project, index) {
        if (project) {
            var title = document.createElement("p");
            title.textContent = project.title;
            title.addEventListener("click", handlers.switchProjectHandler);

            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.setAttribute("data-index", index);
            deleteBtn.addEventListener("click", handlers.deleteProjectHandler);
            
            var newProject = document.createElement("li");
            newProject.replaceChildren(title, deleteBtn);
            newProject.setAttribute("data-index", index);
    
            var projectList = document.querySelector("ul.project-list");
            projectList.appendChild(newProject);
        }
    },

    switchProjects(currProject) {
        //optional: change styling to highlight current project
        var todoHeader = document.querySelector("div.todo-container > h2");
        todoHeader.textContent = currProject.title;

        //clear previous todos
        var todoList = document.querySelector("ul.todo-list");
        todoList.replaceChildren();

        currProject.todos.forEach(function addTodos(todo, index) {
            updateDOM.addToTodoList(todo, index, handlers.deleteTodoHandler);
        }); 

        var newTodoBtn = document.querySelector("button.new-todo");
        newTodoBtn.style.display = "block";
    },

    removeFromProjectList(projectElem) {
        var projectList = document.querySelector("ul.project-list");
        projectList.removeChild(projectElem);
    },

    showCreateTodoForm() {
        var newTodoBtn = document.querySelector("button.new-todo");
        newTodoBtn.setAttribute("disabled", "");
    
        var createTodoForm = document.querySelector("div.create-todo-form");
        createTodoForm.style.display = "block";
    },

    hideCreateTodoForm() {
        var newTodoBtn = document.querySelector("button.new-todo");
        newTodoBtn.removeAttribute("disabled");
    
        var todoInputs = document.querySelectorAll("div.create-todo-form input");
        todoInputs.forEach(function clearInput(input) {
            input.value = "";
        });
    
        var createTodoForm = document.querySelector("div.create-todo-form");
        createTodoForm.style.display = "none";
    },

    addToTodoList(todo, index) {
        if (todo) {
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            var checkboxParent = document.createElement("li");
            checkboxParent.appendChild(checkbox);

            var title = document.createElement("li");
            title.textContent = todo.title;

            var dueDate = document.createElement("li");
            dueDate.textContent = todo.dueDate;

            var priority = document.createElement("li");
            priority.textContent = todo.priority;

            var description = document.createElement("li");
            description.textContent = todo.description;

            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.setAttribute("data-index", index);
            deleteBtn.addEventListener("click", handlers.deleteTodoHandler);
            var deleteBtnParent = document.createElement("li");
            deleteBtnParent.appendChild(deleteBtn);

            var newTodo = document.createElement("ul");
            newTodo.replaceChildren(
                checkboxParent, title, dueDate, priority, description, deleteBtnParent
            );
            
            var newTodoContainer = document.createElement("li");
            newTodoContainer.appendChild(newTodo);
            newTodoContainer.setAttribute("data-index", index);
    
            var todoList = document.querySelector("ul.todo-list");
            todoList.appendChild(newTodoContainer);
        }
    },

    removeFromTodoList(todoElem) {
        var todoList = document.querySelector("ul.todo-list");
        todoList.removeChild(todoElem);
    },

    clearHeaderAndTodos() {
        var todoHeader = document.querySelector("div.todo-container > h2");
        todoHeader.textContent = "";

        var todoList = document.querySelector("ul.todo-list");
        todoList.replaceChildren();

        var newTodoBtn = document.querySelector("button.new-todo");
        newTodoBtn.style.display = "none";
    }

};

export {updateDOM};