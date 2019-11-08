const express = require('express');

const helmet = require('helmet');

//router import here
const projectRouter = require('./routes/project-router.js');


const server = express();

server.use(helmet());
server.use(express.json());

server.use('/', projectRouter);



module.exports = server;