
module.exports = function(program) {
  program
    .command('goodbye')
    .option('-n, --name <type>', 'Specify your name')
    .action((options) => {
      const name = options.name || 'World';
      console.log(`Goodbye, ${name}!`);
    });
}
