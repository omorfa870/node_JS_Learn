const http = require('http');


const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  
  if (req.url === '/') {
    res.write('<body><h1>Welcome to my Node.js Server</h1></body>');
    return res.end();
  }

  else if (req.url === '/about') {
    res.write('<body><h1>This is the about page</h1></body>');
    return res.end();
  }

  res.write('<body><h1>Thanks for using our service</h1></body>');
  res.write('</html>');
  res.end();
  
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});

