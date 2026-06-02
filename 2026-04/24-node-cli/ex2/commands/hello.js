const { input, confirm } = require('@inquirer/prompts');

module.exports = function (program) {
  program
    .command('hello')
    .option('-w, --welcome <welcome>', 'Specify welcome phrase', 'Hello')
    .option('-n, --name <name>', 'Specify your name')
    .action(async (options) => {
      const welcome = options.welcome;
      let name = options.name;

      if (!name) {
        name = await input({ message: 'Enter your name', default: 'Nick' });

        const isConfirm = await confirm({ message: 'Are you sure?' })

        if (!isConfirm) {
          console.log('Stop Hello')
          return;
        }
      }

      console.log(`${welcome}, ${name}!`);

      return Promise.resolve();
    });
}

// могу подфайлы создавать, допустим, работу с базой данных и т.д.
