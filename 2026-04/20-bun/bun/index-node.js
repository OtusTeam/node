import http from "node:http";

const port = Number(process.env.PORT ?? 3000);

const server = http.createServer((req, res) => {
  const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);

  if (url.pathname === "/health") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("ok");
    return;
  }

  res.statusCode = 200;
  res.setHeader("content-type", "text/plain; charset=utf-8");
  res.end("Hello from Bun! Try /health\n");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Node server listening on http://localhost:${port}`);
});

