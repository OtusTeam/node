const express = require('express');

class MyModule {
  #dep1
  #dep2

  #privateVar = 'I am private';

  constructor(dep1, dep2) {
    this.#dep1 = dep1;
    this.#dep2 = dep2;
  }

  #privateMethod() {
    console.log('Accessing private method');
  }

  publicMethod() {
    console.log('Accessing public method');
    console.log(this.#privateVar);
    console.log(this.#dep1, this.#dep2);
    this.#privateMethod();
  }
}

const myModule = new MyModule('dep1', 'dep2');
myModule.publicMethod();
console.log(myModule);
