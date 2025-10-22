//core modules
const path = require('path');

//external modules
const express = require('express');

//Local modules
const rootDir = require('../utils/pathUtils');

const homeRouter = express.Router();

homeRouter.get('/', (req, res, next) => {
  console.log("Handling / for GET request",req.method, req.url);
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = homeRouter;