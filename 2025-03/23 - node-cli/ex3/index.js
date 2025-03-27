const { input } = require('@inquirer/prompts');
const ora = require('ora');

;(async() => {
  const answer = await input({ message: 'Enter your name' });

  console.log(answer);

  const spinner = ora.default('Loading unicorns').start();

  setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
  }, 2000);
})();
