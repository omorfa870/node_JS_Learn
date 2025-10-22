const express = require('express');

const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();



app.use(homeRouter);
app.use(contactRouter);





contactRouter.post('/contact-us', (req, res, next) => {
  console.log("Form submitted", req.method, req.url, req.body);
  res.send();
});





const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 