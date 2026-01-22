import express from 'express';

import config from './config';
import router from './routes';

const app = express();
app.use(router);
console.log('test');

app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`);
});

// Задача докерезировать это.