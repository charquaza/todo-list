//todo properties: title, description, dueDate, priority, completed
function createTodo(title, description, dueDate, priority) {
    return {title, description, dueDate, priority};
}

function createProject(title) {
    if (title) {
        var newProject = {title, todos: []};
        console.log(newProject);
    }
}

var projectList = [];


export {createTodo, createProject, projectList};