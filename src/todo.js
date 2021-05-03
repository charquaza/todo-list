var todo = {
    projectList: [],
    currProjectIndex: null,

    loadProjectsFromStorage() {
        var storedProjects = localStorage.getItem("projects");

        if (storedProjects) {
            var parsedProjects = JSON.parse(storedProjects);
            var projectsNoNull = parsedProjects.filter(function filterNull(currValue) {
                return currValue !== null;
            });

            if (projectsNoNull.length > 0) {
                todo.projectList = projectsNoNull;
                todo.currProjectIndex = 0;
            }
        }
    },

    createProject(title) {
        if (title) {
            var newProject = {
                title, 
                todos: []
            };
    
            todo.projectList.push(newProject);
            
            return newProject;
        }
    },
    
    removeProject(projectIndex) {
        delete todo.projectList[projectIndex];
    },
    
    //todo properties: title, dueDate, priority, description, completed
    createTodo(title, dueDate, priority, description) {
        var newTodo = {title, dueDate, priority, description};
    
        var currProject = todo.projectList[todo.currProjectIndex];
        currProject.todos.push(newTodo);
    
        return newTodo;
    },
    
    removeTodo(todoIndex) {
        var currProject = todo.projectList[todo.currProjectIndex];
        delete currProject.todos[todoIndex];
    }
};

export {todo};