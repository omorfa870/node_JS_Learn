const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("First middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => { 
  console.log("Second middleware", req.url, req.method);
  next();
});

//

app.get('/', (req, res) => {
  res.send("<h1> Home Page </h1>");
});

app.get('/contact-us', (req, res) => {
  res.send(`
    <h1> Contact Us Page </h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <button type="submit">Submit</button>
    </form>
    `);
});

app.post('/contact-us', (req, res, next) => {
  console.log("Form submitted", req.method, req.url, req.body);
  res.send("<h1> Thank you for contacting us! </h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 