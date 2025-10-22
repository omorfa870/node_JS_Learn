const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
  res.send(`
    <h1> Welcome to AIRBNB </h1>
    <a href="/add-home">Add Home</a><br>
    `);
});

module.exports = userRouter;