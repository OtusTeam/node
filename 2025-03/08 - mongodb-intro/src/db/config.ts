import dotenv from 'dotenv';
import { cleanEnv, str } from 'envalid';

dotenv.config();

const env = cleanEnv(process.env, {
  MONGODB_URI: str({ default: 'mongodb://localhost:27017' }),
  MONGODB_DB: str({ default: 'otus' }),
});

export default {
  uri: env.MONGODB_URI,
  db: env.MONGODB_DB,
};
