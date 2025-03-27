
module.exports = function(program) {
  program
    .command('hello')
    .requiredOption('-n, --name <type>', 'Specify your name')
    .action(async (options) => {
      const name = options.name || 'World';
      console.log(`Hello, ${name}!`);

      return Promise.resolve();
    });
}
