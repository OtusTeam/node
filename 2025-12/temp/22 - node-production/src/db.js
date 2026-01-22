const { MongoClient } = require('mongodb');
const config = require('./config');

const client = new MongoClient(config.db.uri);

module.exports = client;