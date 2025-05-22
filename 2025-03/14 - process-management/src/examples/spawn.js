const { spawn } = require('child_process');

// ls
const child = spawn('ls', ['-lh', './']);

// Если нужно передать stdout -> console.log.

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
