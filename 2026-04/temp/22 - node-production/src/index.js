const express = require('express');
const pino = require('pino');
const os = require('os');
const promMid = require('express-prometheus-middleware');

const config = require('./config');
const client = require('./db');

; (async () => {
  console.log('Test');

  await client.connect();

  const app = express();
  const logger = pino();

  const db = client.db('test');
  const collection = db.collection('counter');

  app.use(promMid({
    metricsPath: '/metrics',           // путь, по которому будут метрики
    collectDefaultMetrics: true,       // собирать стандартные метрики Node.js
    requestDurationBuckets: [0.1, 0.3, 0.5, 0.7, 1], // необязательно
  }));

  app.get('/hello/:name', (req, res) => {
    res.json({
      msg: `Hello ${req.params.name}`,
      hostname: os.hostname()
    });
  });

  app.get('/count', async (req, res) => {
    await collection.updateOne(
      { id: 'count' },
      {
        $inc: { count: 1 },
      },
      { upsert: true }
    );

    const countItem = await collection.findOne({ id: 'count' });

    return res.json({
      count: countItem.count,
      hostname: os.hostname()
    });
  })

  app.listen(config.api.port);
  logger.info(`Server started on port: ${config.api.port}`);
})();