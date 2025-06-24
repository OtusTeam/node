#!/usr/bin/env node
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

// Как правило, хотим обрабатывать аргументы.

console.log(process.argv);
console.log(yargs(hideBin(process.argv)).parse());


console.log("Hello, CLI! v1.0");

// Его можно было устанвливать, как отдельный пакет.

/*
[
  '/home/nik/.nvm/versions/node/v22.15.0/bin/node',
  '/home/nik/.nvm/versions/node/v22.15.0/bin/my-nik-cli',
  'run',
  '--stage=dev'
]

{ _: [ 'run' ], stage: 'dev', '$0': 'my-nik-cli' }
*/