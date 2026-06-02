/**
 * Подписчик на subscription userAdded (протокол graphql-ws, как в Nest + Apollo).
 *
 * 1) Запусти API: npm run start:dev
 * 2) В другом терминале: npm run example:subscribe
 * 3) Создай пользователя (см. curl ниже) — в первом терминале должен прийти payload.
 *
 * URL: GRAPHQL_WS_URL=ws://127.0.0.1:3000/graphql (по умолчанию)
 */
const { createClient } = require('graphql-ws');
const WebSocket = require('ws');

const url = process.env.GRAPHQL_WS_URL || 'ws://127.0.0.1:3000/graphql';
const httpOrigin = process.env.GRAPHQL_HTTP || 'http://127.0.0.1:3000';

const client = createClient({
  url,
  webSocketImpl: WebSocket,
});

const subscription = `
  subscription OnUserAdded {
    userAdded {
      id
      firstName
      lastName
    }
  }
`;

console.error(`[subscriber] ws ${url}`);
console.error(
  '[subscriber] trigger sample (HTTP mutation):\n' +
    `  curl -sS -X POST ${httpOrigin}/graphql ` +
    '-H "content-type: application/json" ' +
    `-d '{"query":"mutation { createUser(data: { firstName: \\"Ws\\", lastName: \\"Subscriber\\", password: \\"x\\" }) { id firstName } }"}'` +
    '\n',
);

client.subscribe(
  { query: subscription },
  {
    next: (data) => {
      process.stdout.write(`[subscriber] ${new Date().toISOString()}\n`);
      console.log(JSON.stringify(data, null, 2));
    },
    error: (err) => {
      console.error('[subscriber] error:', err);
      process.exitCode = 1;
    },
    complete: () => {
      console.error('[subscriber] complete');
    },
  },
);
