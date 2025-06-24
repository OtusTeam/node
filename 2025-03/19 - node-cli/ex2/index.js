#!/usr/bin/env node

const { program } = require('commander');
const packageJSON = require('./package.json');

const hello = require('./commands/hello');
const goodbye = require('./commands/goodbye');

// Иметь разные опции
// Или иметь команды.

;(async() => {
  program
    .name(packageJSON.name)
    .description(packageJSON.description)
    .version(packageJSON.version)
    .hook('preAction', (thisCommand, actionCommand) => {
      // Подключиться к базе данных, авторизацию сделать, если надо.

      console.log(`About to call action handler for subcommand: ${actionCommand.name()}`);
      console.log('arguments: %O', actionCommand.args);
      console.log('options: %o', actionCommand.opts());
    });

  hello(program);
  goodbye(program);

  await program.parseAsync(process.argv);
  // await - если наши actions(наши задачи) они асинхронные
})();

/*
;(async () => {
  // 
  program
    .name(packageJSON.name)
    .description(packageJSON.description)
    .version(packageJSON.version);

  hello(program);
  goodbye(program);

  await program.parseAsync(process.argv);
})();
*/