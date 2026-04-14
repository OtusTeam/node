import amqp, { ConsumeMessage } from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL ?? "amqp://guest:guest@localhost:5673";
const EXCHANGE = "logs.fanout";

async function main() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();

  await channel.assertExchange(EXCHANGE, "fanout", { durable: false });
  const queueData = await channel.assertQueue("", { exclusive: true });
  await channel.bindQueue(queueData.queue, EXCHANGE, "");

  console.log(` [*] Subscriber listening exchange "${EXCHANGE}" using queue "${queueData.queue}"`);

  channel.consume(
    queueData.queue,
    (msg: ConsumeMessage | null) => {
      if (!msg) {
        return;
      }
      console.log(` [x] Received: ${msg.content.toString()}`);
    },
    { noAck: true }
  );
}

main().catch((error: unknown) => {
  console.error("Subscriber failed:", error);
  process.exit(1);
});
