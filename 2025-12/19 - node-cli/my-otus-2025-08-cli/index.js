#!/usr/bin/env node

// Уметь обрабатывать опции, отдельные команды делать и т.д.

import yargs from 'yargs';

const options = yargs(process.argv).parse();

console.log('Port', options.port);
console.log('Name', options.name);

console.log(`Hello, ${options.name} CLI!`);