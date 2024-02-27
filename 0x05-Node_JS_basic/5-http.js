/* eslint-disable no-template-curly-in-string */
/* eslint-disable jest/require-hook */
const http = require('http');
// eslint-disable-next-line no-unused-vars
const fs = require('fs');
const path = require('path');

const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const urlPath = req.url;

  if (urlPath === '/') {
    res.end('Hello Holberton School!\n');
  } else if (urlPath === '/students') {
    res.end('This is the list of our students\n');
    const databasePath = path.join(__dirname, 'database.csv');

    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.end(`Error: ${err.message}`);
      });
  } else {
    res.writeHead(404, { ' Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log('Server is listening on port ${port}');
});
module.exports = app;
module.exports = countStudents;
