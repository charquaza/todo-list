//todo properties: title, description, dueDate, priority, completed
function createTodo(title, description, dueDate, priority) {
    return {title, description, dueDate, priority};
}

function createProject(title) {
    return {title, todos: []};
}

var projectList = [];


export {createTodo, createProject, projectList};