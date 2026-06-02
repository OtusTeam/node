# Демо: NestJS + GraphQL (code-first)

Мини-приложение для вебинара: пользователи и команды (many-to-many), параллельный REST для сравнения, **DataLoader** на поле `User.teams` (батч вместо N+1), **subscription** `userAdded` через `graphql-ws`.

## Стек

| Компонент        | Версия (ориентир)   |
|-----------------|---------------------|
| Node.js         | 18+                 |
| NestJS          | 10.x                |
| Apollo Server   | 4.x (`@nestjs/apollo`) |
| GraphQL         | 16.x                |
| TypeORM         | 0.3.x               |
| PostgreSQL      | 16 (Docker)         |

Схема генерируется в корень репозитория: [`schema.gql`](./schema.gql).

## Быстрый старт

```bash
cd 2025-12/graphql
cp .env.example .env   # опционально
docker compose up -d
npm install
npm run start:dev
```

- GraphQL (Apollo Sandbox): `http://localhost:3000/graphql`
- REST: `http://localhost:3000/users`, `http://localhost:3000/teams`

Переменные окружения по умолчанию совпадают с [`docker-compose.yml`](./docker-compose.yml): пользователь `postgres`, БД `demo`, порт хоста `15432`.

## Примеры запросов

- GraphQL-операции: [`examples/operations.graphql`](./examples/operations.graphql)
- REST (формат `.http` для VS Code / IntelliJ): [`examples/rest.http`](./examples/rest.http)
- **Проверка subscription `userAdded` из Node:** с сервером в `start:dev` во втором терминале запусти `npm run example:subscribe` — скрипт подключится по **graphql-ws** к `ws://127.0.0.1:3000/graphql` и выведет события; пример `curl` для мутации печатается в stderr (см. [`examples/subscribe-user-added.cjs`](./examples/subscribe-user-added.cjs)). При необходимости: `GRAPHQL_WS_URL`, `GRAPHQL_HTTP`.

### Один запрос вместо цепочки REST

В REST часто нужны последовательные вызовы: пользователь → заказы → детали. В GraphQL клиент описывает дерево полей, а сервер отдаёт ровно его за один round-trip:

```graphql
query {
  user(id: 1) {
    firstName
    teams {
      name
      members {
        lastName
      }
    }
  }
}
```

### DataLoader

Резолвер `User.teams` использует **отдельный DataLoader на каждый HTTP-запрос** (`Scope.REQUEST`), чтобы кэш не переносился между клиентами и запросами.

### REST vs GraphQL (кратко)

- **REST** опирается на HTTP-методы, пути и статусы; контракт в виде «официальной» схемы на сервере не обязателен.
- **GraphQL** — контракт в виде схемы: чтение через `Query`, изменения через `Mutation`, push-события через `Subscription`. Типобезопасность и интроспекция «из коробки».

### Nulled-массивы в схеме (шпаргалка)

- `[Team]` — массив или элементы могут быть `null`
- `[Team!]` — элементы не `null`, сам массив может быть `null`
- `[Team]!` — массив не `null`, элементы могут быть `null`
- `[Team!]!` — и массив, и элементы не `null`

## Лицензия

MIT
