import { Kafka, logLevel } from "kafkajs";

const BROKERS = (process.env.KAFKA_BROKERS ?? "localhost:9094").split(",");
const TOPIC = process.env.KAFKA_TOPIC ?? "demo.group";

async function main() {
  const kafka = new Kafka({
    clientId: "group-producer",
    brokers: BROKERS,
    logLevel: logLevel.INFO,
  });

  const producer = kafka.producer();
  await producer.connect();

  for (let i = 1; i <= 30; i += 1) {
    const key = String(i % 10);
    const value = JSON.stringify({
      id: i,
      type: i % 2 === 0 ? "even" : "odd",
      createdAt: new Date().toISOString(),
    });
    await producer.send({
      topic: TOPIC,
      messages: [{ key, value }],
    });
    console.log(" [>] Produced:", { key, value });
  }

  await producer.disconnect();
}

main().catch((err) => {
  console.error("Producer failed:", err);
  process.exit(1);
});
