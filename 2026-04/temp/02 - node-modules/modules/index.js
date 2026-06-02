import moduleA from './commonjs-a.js';
// import moduleB from './commonjs-b.js';

const key = 'value';

console.log(import.meta.url);

console.log(moduleA);

// Что-то экспортнули
export default {
  key,
  async myFunction() {
    const moduleAAsync = await import('./commonjs-a.js');
  }
};

export { key };


// 1. Синхронный.
