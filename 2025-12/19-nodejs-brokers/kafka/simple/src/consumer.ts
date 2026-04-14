import { Kafka, logLevel, EachMessagePayload } from "kafkajs";

const BROKERS = (process.env.KAFKA_BROKERS ?? "localhost:9094").split(",");
const TOPIC = process.env.KAFKA_TOPIC ?? "demo.simple";
const GROUP_ID = process.env.KAFKA_GROUP_ID ?? "simple-group";

async function main() {
  const kafka = new Kafka({
    clientId: `simple-consumer-${Math.random().toString(16).slice(2, 8)}`,
    brokers: BROKERS,
    logLevel: logLevel.INFO,
  });

  const consumer = kafka.consumer({ groupId: GROUP_ID });
  await consumer.connect();
  await consumer.subscribe({ topic: TOPIC, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      const key = message.key?.toString();
      const value = message.value?.toString();
      console.log(` [<] ${topic}[${partition}] key=${key} value=${value}`);
    },
  });
}

main().catch((err) => {
  console.error("Consumer failed:", err);
  process.exit(1);
});
