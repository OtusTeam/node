// src/app.ts
import express from 'express';
import userRoutes from './entities/users/routes.js';
import { DatabaseClient } from './db/client.js';

const databaseClient = DatabaseClient.getInstance();

const app = express();
app.use(express.json());

await databaseClient.connect();

app.use('/users', userRoutes);
app.listen(3333, () => console.log('Server running on http://localhost:3333'));


// Controller - Service - Repository - Model