const express = require('express');

const app = express();
const port = 1245;

// eslint-disable-next-line jest/require-hook
app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

// eslint-disable-next-line jest/require-hook
app.listen(port, () => {
});

module.exports = app;
