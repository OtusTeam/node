const { createHash } = require('crypto');
const { MongoClient } = require('mongodb')
const { Transform, Writable } = require('stream');
const { pipeline } = require('stream/promises');
const { setTimeout: setTimeoutAsync } = require('timers/promises');

// Читаем стимом из коллекции -> 
// программно анонимизируем -> 
// батч записываем в новую коллекцию

// У нас есть юзеры с персональными данными
// мы хотим создать новую коллекцию, где данные будут анонимизированны.
// вычитывать данные в потоке - накапливать батчами 100 штук или 
// записывать их по достижению таймаута 1000 мс

const MONGO_URI = 'mongodb://localhost:27017'
const DB_NAME = 'app'
const SOURCE_COLLECTION = 'customers'
const TARGET_COLLECTION = 'customers_anonymised'

const BATCH_SIZE = 100
const BATCH_TIMEOUT_MS = 1000

async function createMongoPipeline() {
  const client = new MongoClient(MONGO_URI)
  await client.connect()

  const db = client.db(DB_NAME)
  const source = db.collection(SOURCE_COLLECTION)
  const target = db.collection(TARGET_COLLECTION)

  await target.deleteMany({});

  // Readable stream
  const readable = source.find({}).stream()

  // анонимные юзеры
  const transformer = new Transform({
    objectMode: true,
    async transform(doc, _, cb) {
        //await setTimeoutAsync(100);

        const anonCustomer = anonymiseCustomer(doc);

        cb(null, anonCustomer)
    }
  })

  const writer = (() => {
    let buffer = []
    let timer = null

    async function flush(cb) {
      if (buffer.length === 0) return cb?.()

      const toInsert = [...buffer]
      buffer = []

      clearTimeout(timer)
      timer = null

      try {
        await target.insertMany(toInsert)
        console.log(`✅ Flushed ${toInsert.length} docs`)
        cb?.()
      } catch (err) {
        console.error('❌ Error on insertMany:', err)
        cb?.(err)
      }
    }

    return new Writable({
      objectMode: true,

      write(doc, _, cb) {
        buffer.push(doc)

        if (buffer.length >= BATCH_SIZE) {
          return flush(cb)
        }

        if (!timer) {
          timer = setTimeout(() => flush(), BATCH_TIMEOUT_MS)
        }

        cb()
      },

      final(cb) {
        flush(cb)
      }
    })
  })()

  try {
    await pipeline(
      readable, 
      transformer, 
      writer
    )
    console.log('🎉 ETL pipeline completed')
  } catch (err) {
    console.error('❌ Pipeline failed:', err)
  } finally {
    await client.close()
  }
}

createMongoPipeline()

function anonymiseCustomer(customer) {
    return {
        ...customer,
        firstName: anonymiseString(customer.firstName),
        lastName: anonymiseString(customer.lastName),
        email: anonymiseEmail(customer.email),
        address: anonymiseAddress(customer.address)
    };
}

function anonymiseAddress(address) {
    return {
        ...address,
        line1: anonymiseString(address.line1),
        line2: anonymiseString(address.line2),
        postcode: anonymiseString(address.postcode)
    };
}

function anonymiseEmail(email) {
    const [first, second] = email.split('@');
    const seq = generateDeterministicSequiance(first);

    return `${seq}@${second}`;
}

function anonymiseString(str) {
    return generateDeterministicSequiance(str);
}

function generateDeterministicSequiance(value) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const ALPHABET_LENGTH = ALPHABET.length;
    const DETERMINISTIC_SEQUIANCE_LENGTH = 8;

    const hash = createHash("sha256").update(value).digest("hex");
    let result = "";

    for (let i = 0; i < DETERMINISTIC_SEQUIANCE_LENGTH; i++) {
        const index = parseInt(hash.substring(i * 2, i * 2 + 2), 16) % ALPHABET_LENGTH;
        result += ALPHABET[index];
    }

    return result;
}