//core modules
const path = require('path');

//external modules
const express = require('express');

//Local modules
const rootDir = require('../utils/pathUtils');

const contactRouter = express.Router();

contactRouter.get('/contact-us', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

contactRouter.post('/contact-us', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-success.html'));
});

module.exports = contactRouter;