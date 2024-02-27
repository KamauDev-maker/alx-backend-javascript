// eslint-disable-next-line jest/require-hook
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// eslint-disable-next-line jest/require-hook
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

// eslint-disable-next-line jest/require-hook
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
