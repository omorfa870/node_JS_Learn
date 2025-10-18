const { sumRequest } = require('./sum');
const requestHandler = (req, res) => {

  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html lang="en">
      <head>
          <title>Calculator</title>
      </head>
      <body>
      <h1>Welcome to Calculator Home Page</h1>
      <a href="/calculator">Go to Calculator</a>
      </body>
      </html>
    `);
    return res.end();
  }

  else if (req.url.toLowerCase() === '/calculator'&& req.method === 'POST'){
    return sumRequest(req, res);
  }

  else if (req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html lang="en">
      <head><title>Calculator</title></head>
      <body>
      <h1>Here is the calculator</h1>
      <form action="/calculator" method="POST">
      <input type="text" placeholder="First Number" name="firstNumber"/>
      <input type="text" placeholder="Second Number" name="secondNumber"/>
      <input type="submit" value="Sum"/>
      </form>
      </body>
      </html>
    `);
    return res.end();
  }

  else {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html lang="en">
      <head>
          <title>Calculator</title>
      </head>
      <body>
      <h1>404 not found</h1>
      <a href="/">Go to Home</a>
      </body>
      </html>
    `);
    return res.end();
  }
}

exports.requestHandler = requestHandler;