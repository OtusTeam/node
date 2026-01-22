const express = require('express');
const { celebrate, Joi, errors, Segments } = require('celebrate');
const app = express();

app.use(express.json());

// app.post('/user', middleware1, middleware2, ..., ctrl);

const bodySchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().min(0).required()
});

// Сериализация - это бывает полезно, чтобы

// Создаем эндпоинты, то мы вешаем от 0 до 1+ миддлеварок.

// app.post('/user', auth, validation, handler);e

const validationMiddleware = celebrate({
    // query и т.д.
    [Segments.BODY]: bodySchema
});

app.post('/user', validationMiddleware, (req, res) => {
    console.log('typeof age', typeof req.body.age);

    res.send('User data is valid');
});

app.use(errors());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Приведение типов через схемы
// кто-то передал флаг enabled=1 -> на сервер enabled=true


// Сложная фильтрация, я отхожу от GET в пользу POST.
// Можно ли в GET передать request body?
// Если вы используете fetch, он вам запретит это делать. Если axios, то можно.
/*
{
    "filters": [
        {
            "column": "name",
            "value": "nik", // может быть массив
            "match": "in" // in/nin/eq/neq
        }
    ]
}*/
/*
{
    "username": "nik",
    "email": "nik@email.com",
    "password": "123412566",
    "age": 35
} //
*/
// Формируем поля в json
// Формируем правила для полей.
// Password кастомную проверку.

// zod - в рантайме.