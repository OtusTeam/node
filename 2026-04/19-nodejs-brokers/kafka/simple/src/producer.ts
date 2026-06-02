import { Kafka, logLevel } from "kafkajs";

const BROKERS = (process.env.KAFKA_BROKERS ?? "localhost:9094").split(",");
const TOPIC = process.env.KAFKA_TOPIC ?? "demo.simple";

async function main() {
  const kafka = new Kafka({
    clientId: "simple-producer",
    brokers: BROKERS,
    logLevel: logLevel.INFO,
  });

  const admin = kafka.admin();
  await admin.connect();
  const topics = await admin.listTopics();
  if (!topics.includes(TOPIC)) {
    await admin.createTopics({
      topics: [{ topic: TOPIC, numPartitions: 3, replicationFactor: 1 }],
      waitForLeaders: true,
    });
    console.log(" [x] Created topic:", TOPIC);
  }
  await admin.disconnect();

  const producer = kafka.producer();
  await producer.connect();

  for (let i = 1; i <= 20; i += 1) {
    const key = String(i % 5);
    const value = JSON.stringify({
      id: i,
      text: `message #${i}`,
      createdAt: new Date().toISOString(),
    });

    await producer.send({
      topic: TOPIC,
      messages: [{ key, value }],
    });
    console.log(" [>] Sent:", { key, value });
  }

  await producer.disconnect();
}

main().catch((err) => {
  console.error("Producer failed:", err);
  process.exit(1);
});
