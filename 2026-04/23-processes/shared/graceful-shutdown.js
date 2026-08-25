// Clinic и профайлеры корректнее собирают отчёт, если процесс
// закрывает HTTP-сервер и выходит сам (а не висит на Ctrl+C).

function attachGracefulShutdown(server) {
  let stopping = false;

  const shutdown = (signal) => {
    if (stopping) {
      return;
    }
    stopping = true;
    console.log(`\n${signal}: shutting down...`);

    server.close(() => {
      process.exit(0);
    });

    setTimeout(() => process.exit(1), 3000).unref();
  };

  process.once('SIGINT', () => shutdown('SIGINT'));
  process.once('SIGTERM', () => shutdown('SIGTERM'));
}

module.exports = { attachGracefulShutdown };
