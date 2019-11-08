const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    addProject,
    getTasks,
    addTask,
    getResources,
    addResource,
}


//get projects: 

function getProjects(){
    return db('projects');
}

//add project

function addProject(project){
    return db('projects')
        .insert(project);
}

//get tasks

function getTasks(){
    return db('tasks');
}

//add task

function addTask(task){
    return db('tasks').insert(task);
}

//get resources

function getResources(){
    return db('resources');
}

// add resource

function addResource(resource){
    return db('resources').insert(resource);
}

//STRETCH GET PROJECT BY ID returning project info, linked tasks, linked resources