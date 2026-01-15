const express = require('express');
const app = express();

app.use((req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        res.setHeader('WWW-Authenticate', 'Basic');
        res.status(401).send('Authentication required');
    } else {
        const [username, password] = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
        if (username === 'admin' && password === 'password') {
            next();
        } else {
            res.status(401).send('Unauthorized');
        }
    }
});

app.get('/', (req, res) => {
    res.send('Hello, authenticated user!');
});

app.listen(3020, () => console.log('Server running on port 3020'));
