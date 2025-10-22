const express = require('express');
const hostRouter = express.Router();

hostRouter.get('/', (req, res, next) => {
  res.send(`
    <h1> Host Dashboard </h1>
    <form action="/host/add-home" method="POST">
      <input type="text" name="homeName" placeholder="Home Name" required />
      <input type="submit" value="Register Home" />
    </form>
    `);
});

hostRouter.post('/add-home', (req, res, next) => {
  res.send(`
    <h1> Home Registered Successfully by Host! </h1>
    <a href="/host">Go to Host Dashboard</a>
  `);
});

module.exports = hostRouter; 