const dotenv = require('dotenv');
const { cleanEnv, str, num } = require('envalid');

dotenv.config();

const env = cleanEnv(process.env, {
    DB_URI: str({ default: 'mongodb://localhost:27017/db' }),
    API_PORT: num({ default: 5555 })
});

module.exports = {
    db: {
        uri: env.DB_URI
    },
    api: {
        port: env.API_PORT
    }
}
