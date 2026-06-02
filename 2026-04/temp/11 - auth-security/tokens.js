const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key';

// Функция для генерации случайного токена
function generateRandomToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Функция для создания хэш-токена
function generateHashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

// Функция для создания JWT
function generateJWT(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

// Генерация случайного токена
const randomToken = generateRandomToken();
console.log('Random Token:', randomToken);

// Генерация хэш-токена
const hashToken = generateHashToken(randomToken);
console.log('Hash Token:', hashToken);

// Генерация JWT
const payload = { userId: 123, role: 'admin' };
const jwtToken = generateJWT(payload);
console.log('JWT Token:', jwtToken);

// Верификация JWT
function verifyJWT(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
}

// Верификация сгенерированного JWT
const verifiedPayload = verifyJWT(jwtToken);
console.log('Verified Payload:', verifiedPayload);
