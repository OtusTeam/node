const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Настройка хранилища для multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        console.log(file);

        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Инициализация multer
const upload = multer({ storage });

// Маршрут для загрузки файла
app.post('/upload', upload.single('file'), (req, res) => {
    try {
        console.log('req.file', req.file);

        // Пишете в реальную систему, то должна быть связь между файловой системой и базой.

        res.send('File uploaded successfully');
    } catch (error) {
        res.status(400).send('Error uploading file');
    }
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// brevo

// https://dev.to/paras594/upload-images-to-aws-s3-using-multer-in-nodejs-1164
// curl -X POST http://localhost:3000/upload -F "file=@./example.png"
