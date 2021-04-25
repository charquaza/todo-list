var updateDOM = {
    buildDOM(projectList) {
        if (projectList) {
            projectList.forEach(this.addToProjectList);

            //also add todos, but just for the first project
            projectList[0].todos.forEach(this.addToTodoList);
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
    
        var projectNameInput = document.querySelector("input#project-name");
        projectNameInput.value = "";
    
        var createProjectForm = document.querySelector("div.create-project-form");
        createProjectForm.style.display = "none";
    },

    addToProjectList(project) {
        if (project) {
            var name = document.createElement("p");
            name.textContent = project.title;

            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            
            var newProject = document.createElement("li");
            newProject.replaceChildren(name, deleteBtn);
    
            var projectList = document.querySelector("ul.project-list");
            projectList.appendChild(newProject);
        }
    },

    addToTodoList(todo) {
        if (todo) {
            var name = document.createElement("p");
            name.textContent = todo.title;

            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            
            var newTodo = document.createElement("li");
            newTodo.replaceChildren(name, deleteBtn);
    
            var todoList = document.querySelector("ul.todo-list");
            todoList.appendChild(newTodo);
        }
    }
};

export {updateDOM};