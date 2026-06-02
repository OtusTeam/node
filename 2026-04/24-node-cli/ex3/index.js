const { setTimeout: delay } = require('node:timers/promises');
const { input } = require('@inquirer/prompts');
const ora = require('ora');

; (async () => {
  // Или опция или интерактив.
  const answer = await input({
    message: 'Enter your name',
    default: 'Nik'
  });

  console.log(answer);

  // Трейс запуска сделать
  // CLI -> linter -> build -> test

  const spinner = ora.default('Loading unicorns').start();

  await delay(2000);

  spinner.color = 'yellow';
  spinner.text = 'Loading rainbows';

  await delay(2000);

  spinner.stop();
})();
