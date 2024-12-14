const jwt = require('jsonwebtoken');

// Секретный ключ для подписи токенов
const secretKey = 'your_secret_key';

// Создание JWT
function generateJWT(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// Верификация JWT
function verifyJWT(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    return null;
  }
}

// Пример использования
const payload = { userId: 123, role: 'admin' };
const token = generateJWT(payload);
console.log('JWT:', token);

const verifiedPayload = verifyJWT(token);
console.log('Verified Payload:', verifiedPayload);
