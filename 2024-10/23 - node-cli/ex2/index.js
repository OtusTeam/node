#!/usr/bin/env node

const { program } = require('commander');
const packageJSON = require('./package.json');
const hello = require('./commands/hello');
const goodbye = require('./commands/goodbye');

// Иметь разные опции
// Или иметь команды.

;(async () => {
  program
    .name(packageJSON.name)
    .description(packageJSON.description)
    .version(packageJSON.version);

  hello(program);
  goodbye(program);

  await program.parseAsync(process.argv);
})();
