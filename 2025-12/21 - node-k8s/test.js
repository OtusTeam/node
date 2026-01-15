;(async() => {
  const response = await fetch('http://192.168.59.100:31270/count');
  const json = await response.json();

  for (let i = 0; i < 100; i++) {
    const response = await fetch('http://192.168.59.100:31270/count');
    const json = await response.json();

    console.log(json);
  }
})();
