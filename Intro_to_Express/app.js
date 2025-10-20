//External Modules
const express = require('express');

const requestHandler = require('./user');

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  console.log("Came in middleware");
  res.send('Hello from Express!');
});  

    

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port address http://localhost:${PORT}`);
});