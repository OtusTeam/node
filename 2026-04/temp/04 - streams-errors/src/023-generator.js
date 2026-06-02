function* gen() {
  console.log('before 1');
  console.log('before 1');
  console.log('before 1');
  console.log('before 1');
  console.log('before 1');
  yield 1;
  console.log('before 2');
  yield 2;
  console.log('before 3');
  yield 3;

  return 4;
}

const g = gen();

console.log(g);

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
