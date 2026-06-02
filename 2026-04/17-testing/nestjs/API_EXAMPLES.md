# Примеры использования API

## 1. Создание пользователя

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe",
    "age": 30
  }'
```

**Ответ:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "email": "user@example.com",
  "name": "John Doe",
  "age": 30,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## 2. Авторизация

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

**Ответ:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

## 3. Получение всех пользователей (требует авторизации)

```bash
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 4. Получение пользователя по ID

```bash
curl -X GET http://localhost:3000/users/507f1f77bcf86cd799439011 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 5. Обновление пользователя

```bash
curl -X PATCH http://localhost:3000/users/507f1f77bcf86cd799439011 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "age": 35
  }'
```

## 6. Удаление пользователя

```bash
curl -X DELETE http://localhost:3000/users/507f1f77bcf86cd799439011 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## Примеры с использованием Postman/Insomnia

1. **Создайте переменную окружения** `baseUrl` = `http://localhost:3000`
2. **Создайте переменную** `token` для хранения JWT токена
3. **После логина** сохраните `access_token` в переменную `token`
4. **Для защищенных эндпоинтов** используйте заголовок:
   ```
   Authorization: Bearer {{token}}
   ```
