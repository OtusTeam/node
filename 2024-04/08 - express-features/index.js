import express from 'express';
import { router as corsRouter } from './routes/cors.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import basicAuth from 'express-basic-auth';
import fs from 'fs';
import xmlparser from 'express-xml-bodyparser';
import { render } from 'pug';

const app = express();

const users = [
    { name: 'user1', pwd: 'password@@@' }
];


app.use(cors());
// app.use(basicAuth({
//     users: { 'user1': 'password@@@' }
// }))

app.use((req, res, next) => {




    req.on('data', (da) => {
        req.body = JSON.parse(da.toString());
        // console.log(da.toString());
    });
    req.on('end', () => {
        next();
    });
});

// app.use((req, res, next) => {
//     console.log(req.query);
//     console.log('inside 1st middleware');
//     res.on('finish', () => {
//         console.log('middleware 1 finish');
//     })
//     next();

// });


// app.set('view engine', 'pug');
//app.use(bodyParser.json());
//app.use(xmlparser());
app.use('/cors', corsRouter);
// app.use(cors())

// app.use((req, res, next) => {

//     const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
//     console.log(Buffer.from(b64auth, 'base64').toString());
//     const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');
// console.log('login',login, 'passwd',password);
//     if (users.some(x => x.name === login && x.pwd === password)) {

//         return next();
//     }

//     res.set('WWW-Authenticate', 'Basic realm="401"') // change this
//     res.status(401).send('Authentication required.') // custom message  
// });


app.get('/users', (_, res) => {
    console.log('inside request');
    res.send('ok1');
    console.log('after request');
})

app.post('/users', (req, res) => {
    console.log(req.body);

    res.send('ok');
});

app.post('/xml', (req, res) => {
    console.log(JSON.stringify(req.body));

    res.send('ok');
});

app.get('/pug', (req, res) => {
    res.render('index', { list1: ['alpha', 'beta', 'gamma'] ,msg:'aaa маленькое'});
});


app.engine('mytpl', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)
        let rendered = content.toString();

        console.log('tpl: ',rendered);
        console.log('options: ',options);
        for (let o in options.params) {
            rendered = rendered.replace("#{" + o + "}", options.params[o]);
        }


        console.log(rendered);

        return callback(null, rendered)
    })
});
app.set('view engine','pug');

app.set('views', './views');

app.get('/mytpl-demo', (req,res)=>{
    res.render('my',{params:{ title:' УРАААААА', username:'otus-user'}});
});

app.listen(3001, () => { });