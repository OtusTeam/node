// Дочерний скрипт для exec: читает argv и печатает JSON в stdout.

const userId = process.argv
  .find((arg) => arg.startsWith('--user_id='))
  ?.split('=')[1];

console.log(JSON.stringify({ success: true, userId }));
