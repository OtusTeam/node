import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger-output.json' assert { type: "json" }
import {userRouter} from "./routers/user.js";
import {booksRouter} from "./routers/book.js";

const app = express();
app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(userRouter);
app.use(booksRouter);

mongoose.connection
    .on('error', err => {
        console.error(err);
    })
    .on('open', err => {
        console.log(`БД подключена `);
    })

async function main() {
    try{
        await mongoose.connect('mongodb://maxakkerman1111:MaxAkkerman@147.45.141.198:27017/default_db?authSource=admin&directConnection=true');
        app.listen(3000);
        console.log("Сервер ожидает подключения...");
    }
    catch(err) {
        return console.log(err);
    }

}

main();

process.on('SIGQUIT', () => {
    mongoose.connection.close()
    console.log('Received kill signal, shutting down gracefully');
    process.exit();
}); // Keyboard quit