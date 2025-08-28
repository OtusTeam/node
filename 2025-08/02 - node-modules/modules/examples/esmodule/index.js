import { fileURLToPath } from 'node:url';
import myModuleNewname from './my-module-1.js';
import { age as userAge } from './my-module-1.js';
 

const asyncModule = (await import('./async.js')).default;

console.log(myModuleNewname, userAge);
console.log(asyncModule);
console.log(import.meta.url, fileURLToPath(import.meta.url));








// const async = (await import('./async.js')).default;

// console.log(async);

// // // console.log(asyncModule.default);

// // console.log(import.meta.url);


// // // import fs from 'fs';
// import { fileURLToPath } from 'node:url';
// // // import myModule1 from './my-module-1.js';

// // console.log(fileURLToPath(import.meta.url))

// import myModule1 from './my-module-1.js';

// // console.log(myModule1);

// export const a = 'a';

// export function name() {

// }

// export default {
//   name: 'nik'
// }
