import { setTimeout } from 'timers/promises';

console.log('timeout start');

await setTimeout(1000); // setTimeout с промисом.

console.log('timeout end');

export default 'async';
