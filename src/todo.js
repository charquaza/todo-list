function createProject(title) {
    if (title) {
        var newProject = {
            title, 
            todos: []
        };

        projectList.push(newProject);
        
        return newProject;
    }
}

function removeProject(projectIndex) {
    delete projectList[projectIndex];
}

//todo properties: title, dueDate, priority, description, completed
function createTodo(title, dueDate, priority, description) {
    var newTodo = {title, dueDate, priority, description};

    var currProject = projectList[currProjectIndex];
    currProject.todos.push(newTodo);

    return newTodo;
}

function removeTodo(todoIndex) {
    var currProject = projectList[currProjectIndex];
    delete currProject.todos[todoIndex];
}

var projectList = [];
var currProjectIndex = 0;


export {createTodo, removeTodo, createProject, removeProject, projectList, currProjectIndex};