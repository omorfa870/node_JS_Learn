const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port address http://localhost:${PORT}`);
});