import autocannon from "autocannon";

const url = process.argv[2] ?? process.env.URL ?? "http://localhost:3000/health";
const connections = Number(process.env.CONNECTIONS ?? 50);
const duration = Number(process.env.DURATION ?? 10);
const pipelining = Number(process.env.PIPELINING ?? 1);

const result = await autocannon({
  url,
  connections,
  duration,
  pipelining,
});

autocannon.printResult(result);
