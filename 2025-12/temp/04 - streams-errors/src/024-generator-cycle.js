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

  yield 4;
}

for(const iterator of gen()) {
  console.log(iterator)
 }
