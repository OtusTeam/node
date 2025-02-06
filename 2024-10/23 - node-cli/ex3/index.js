const { input } = require('@inquirer/prompts');

;(async() => {
  const answer = await input({ message: 'Enter your name' });

  console.log(answer);
})();
