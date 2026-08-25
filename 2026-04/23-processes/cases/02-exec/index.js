// exec: shell + буферизованный вывод. Хорош для коротких команд.

const path = require('node:path');
const { exec } = require('node:child_process');

const scriptPath = path.join(__dirname, 'script.js');

exec(`node ${scriptPath} --user_id=100`, (error, stdout, stderr) => {
  if (error) {
    console.error('exec error:', error.message);
    return;
  }

  if (stderr) {
    console.error('stderr:', stderr);
  }

  console.log('stdout:', stdout.trim());
});
