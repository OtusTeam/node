; (async () => {
  const obj = { key: 'value' };

  console.log('before', obj.stack);

  // throw new Error('test');

  Error.captureStackTrace(obj);

  console.log('after', obj.stack);
})()
