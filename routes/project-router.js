const express = require('express');

const pm = require('./project-model.js');

const router = require('express').Router();


//get projects

router.get('/projects', (req,res) => {
    pm.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(() => {
        res.status(500).json({error: `failed to retrieve projects`});
    });
});


//post project


router.post('/projects', (req, res) => {
    const project = req.body;
    pm.addProject(project)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(() => {
        res.status(500).json({error: `failed to add project`})
    });
});


//get resources 

router.get('/resources', (req, res) => {
    pm.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(() => {
        res.status(500).json({error: `failed to retrieve resources`})
    });
});


//post resources

router.post('/resources', (req, res) => {
    const resource = req.body;
    pm.addResource(resource)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(() => {
        res.status(500).json({error: `failed to add resource`})
    });
});


//get tasks

router.get('/tasks', (req, res) => {
    pm.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(() => {
        res.status(500).json({error: `failed to retrieve tasks`})
    });
});

//post tasks

router.post('/tasks', (req, res) => {
    const task = req.body;
    pm.addTask(task)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(() => {
        res.status(500).json({error: `failed to add task`})
    });
})

module.exports = router;