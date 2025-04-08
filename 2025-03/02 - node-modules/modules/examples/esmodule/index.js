// const asyncModule = await import('./async.js');

const async = (await import('./async.js')).default;

console.log(async);

// // console.log(asyncModule.default);

// console.log(import.meta.url);


// // import fs from 'fs';
import { fileURLToPath } from 'node:url';
// // import myModule1 from './my-module-1.js';

// console.log(fileURLToPath(import.meta.url))

import myModule1 from './my-module-1.js';

// console.log(myModule1);

export const a = 'a';

export function name() {

}

export default {
  name: 'nik'
}
