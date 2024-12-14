const express = require('express');
const { celebrate, Joi, errors } = require('celebrate');
const app = express();

app.use(express.json());

// app.post('/user', middleware1, middleware2, ..., ctrl);

const bodySchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().min(0).required()
});

// Сериализация - это бывает полезно, чтобы

app.post('/user', celebrate({
    body: bodySchema
}), (req, res) => {
    res.send('User data is valid');
});

app.use(errors());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
