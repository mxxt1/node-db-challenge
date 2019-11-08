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
    return db('projects')
    .then(projects => {
        projects.forEach(project => {
            project.completed === 1 ? project.completed = 'true' : project.completed = 'false';
        });
        return projects;
    });
}

//add project

function addProject(project){
    return db('projects')
        .insert(project);
}

//get tasks

function getTasks(){
    return db('tasks')
    .select(
        'tasks.*',
        'projects.name', 
        'projects.description'
        )
    .from('tasks')
    .join('projects', 'projects.id','tasks.project_id')
    .then( tasks => {
        tasks.forEach(task => {
            task.completed === 1 ? task.completed = 'true' : task.completed = 'false';
        });
    return tasks;
    });
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