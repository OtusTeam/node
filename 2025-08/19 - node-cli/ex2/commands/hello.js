
module.exports = function (program) {
  program
    .command('hello')
    .option('-w, --welcome <welcome>', 'Specify welcome phrase', 'Hello')
    .requiredOption('-n, --name <name>', 'Specify your name')
    .action(async (options) => {
      const welcome = options.welcome;
      const name = options.name || 'World';
      console.log(`${welcome}, ${name}!`);

      return Promise.resolve();
    });
}

// могу подфайлы создавать, допустим, работу с базой данных и т.д.
