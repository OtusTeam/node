
const moduleA = ((moduleName) => {
  // функция вызывается, она создает объект,
  // можно передавать зависимости

  return {
    name: moduleName,

    show() {
      console.log(this.name);
    }
  }
})('external-name');

console.log(moduleA);
moduleA.show();

// - декомпозиция кода. +
// - для изолированности и создания namespace +
// - дерево зависимостей -
// - tree shaking: может брать куски/нужные функции. -
