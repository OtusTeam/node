const express = require('express');
const app = express(); // инстанс сервера.

// express body
// express доолжен его распарсить.
// Надо говорить express чтобы он парсил json

// Хитрая запись делает регистрацию парсинга json
// 1. app.use - это повесить глобальную middleware
// 2. express.json() - это порождающая функция, которая возвращает функцию
app.use(express.json(/* options */));

app.get('/hello/nik', (req, res, next) => {
    console.log('route 1');
    console.log(+req.query.num);

    res.json({ msg: 'nik', route: 'static'});
}); // Два роута регаюe

app.get('/hello/:type', (req, res) => {
    console.log('route 2');
    res.json({ msg: req.params.id, route: 'dynamic' });
});

// Все эндпоинты, с загрушками или ничего не делают или хранят в nodejs memory

// users GET
// users/:id GET
// users/list GET


app.get('/', 
    (req, res, next) => {
        console.log('handler 1');

        // Промежуточный обработчик или возвращет ответ клиенту или передает дальше.

        // res.json/res.send - послать информацию клиенту

        // Пишем логи

        // req - request

        // console.log(req.ip); req и res - контекст запроса
        // 1. req мутируем request
        req.myField = 'super-value';
        // 2. Сложный вариант.
        // Желательно сразу где-то иметь ключ идемпотентности(уникальный ключ)
        // к этому ключу привязать всю мету информацию о запросе.
        // можно использовать redis внешнюю память, куда мы всё записываем.

        // res.json({ msg: 'handler 1' });

        next(); // коллбэк, который передает дальше управление по цепочке.
    }, 
    (req, res) => {
        console.log('handler 2');
        console.log(req.myField);

        res.json({ msg: 'Hello world' });
    }); // вызываются последовательно.

// app.post/put/delete

app.listen(8080);

console.log('Server started. Port 8080.');