// hello.mjs
import util from 'node:util';
import test from './index.cjs';

console.log(test);

export const hello = util.format('hello %s', 'world');
