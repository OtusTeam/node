npm install -g typescript
tsc
echo "const isTrue: boolean | string = ''

if (isTrue) {
  console.log('hello typescript')
}" > index.ts
tsc index.ts
node index.js