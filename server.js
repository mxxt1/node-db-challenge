const express = require('express');

const helmet = require('helmet');

//router import here


const server = express();

server.use(helmet());
server.use(express.json());



module.exports = server;