const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

const port = 1245;
// eslint-disable-next-line jest/require-hook
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
