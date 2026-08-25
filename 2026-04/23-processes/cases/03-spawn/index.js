// spawn: стриминг stdout/stderr без shell (по умолчанию).

const { spawn } = require('node:child_process');

const child = spawn('ls', ['-lh', __dirname]);

child.stdout.on('data', (data) => {
  console.log(`stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
