const express = require('express');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use('/user', userRouter);
app.use('/host', hostRouter);


app.get('/', (req, res, next) => {
  console.log(req.method, req.url);
  res.send(`
    <h1> Welcome to AIRBNB </h1>
    <a href="/add-home">Add Home</a><br>
    `);
});

app.get('/add-home', (req, res, next) => {
  console.log(req.method, req.url);
  res.send(`
    <h1> Register your home now </h1>
    <form action="/add-home" method="POST">
      <input type="text" name="homeName" placeholder="Home Name" required />
      <input type="submit" value="Register Home" />
    </form>
    `);
});

app.post('/add-home', (req, res, next) => {
  console.log(req.method, req.url);
  res.send(`
    <h1> Home Registered Successfully! </h1>
    <a href="/">Go to Home</a>
  `);
});

app.use((req, res, next) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});