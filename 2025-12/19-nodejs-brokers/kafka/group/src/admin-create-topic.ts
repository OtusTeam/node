import { Kafka, logLevel } from "kafkajs";

const BROKERS = (process.env.KAFKA_BROKERS ?? "localhost:9094").split(",");
const TOPIC = process.env.KAFKA_TOPIC ?? "demo.group";
const PARTITIONS = Number(process.env.KAFKA_PARTITIONS ?? "6");

async function main() {
  const kafka = new Kafka({
    clientId: "group-admin",
    brokers: BROKERS,
    logLevel: logLevel.INFO,
  });
  const admin = kafka.admin();
  await admin.connect();

  const topics = await admin.listTopics();
  if (!topics.includes(TOPIC)) {
    await admin.createTopics({
      topics: [{ topic: TOPIC, numPartitions: PARTITIONS, replicationFactor: 1 }],
      waitForLeaders: true,
    });
    console.log(` [x] Created topic ${TOPIC} with ${PARTITIONS} partitions`);
  } else {
    console.log(` [=] Topic ${TOPIC} already exists`);
  }
  await admin.disconnect();
}

main().catch((err) => {
  console.error("Admin failed:", err);
  process.exit(1);
});
