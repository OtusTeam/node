const os = require('os');
const { MongoClient } = require('mongodb');

const express = require('express');
const app = express();

; (async () => {
  let count = 0;

  const client = new MongoClient('mongodb://192.168.49.2:31002/k8s');

  await client.connect();

  const db = client.db('k8s');
  const collection = db.collection('counter');

  app.get('/count', (req, res) => {
    return res.json({ count: ++count, hostname: os.hostname() });
  })

  app.get('/count-db', async (req, res) => {
    await collection.updateOne(
      { id: 'count' },
      {
        $inc: { count: 1 },
      },
      { upsert: true }
    );

    const countItem = await collection.findOne({ id: 'count' });

    return res.json({ count: countItem.count, hostname: os.hostname() });
  })

  app.listen(4000);

  console.log('Server started on 4000 port');
  console.log('Server hostname:', os.hostname());
})();
