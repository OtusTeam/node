// Выполнить фоном задачу через промис и получить результат

const path = require("path");
const Piscina = require("piscina");

const piscina = new Piscina({
  filename: path.resolve(__dirname, "piscina_worker.js"),
});

(async function () {
  const result = await piscina.run({ a: 54, b: 6 });
  console.log(result); // Prints 10
})();
