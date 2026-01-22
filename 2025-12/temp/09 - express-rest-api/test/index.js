import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json())

app.post('/status', (req,res)=>{
    res.send('status OK')
})

async function main() {
    try{
        app.listen(3001);
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