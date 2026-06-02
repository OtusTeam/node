const myModule = (function(dep1, dep2) {
  const privateProperty = 'private';
  const privateFunc = () => { console.log("I'm private"); };

  console.log(dep1, dep2);

  return {
    publicProperty: `public-${privateProperty}`,

    publicMethod() {
      console.log("I'm public");

      privateFunc();
    }
  }
})('dep1', 'dep2'); // Создает функцию и вызывает её "на месте" 

// Способы создания объекта

console.log(myModule);

myModule.publicMethod();
