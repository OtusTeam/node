import amqp from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL ?? "amqp://guest:guest@localhost:5673";
const EXCHANGE = "logs.fanout";

async function main() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();

  await channel.assertExchange(EXCHANGE, "fanout", { durable: false });

  const message = process.argv.slice(2).join(" ") || `Log at ${new Date().toISOString()}`;
  channel.publish(EXCHANGE, "", Buffer.from(message));
  console.log(` [x] Published to "${EXCHANGE}": ${message}`);

  await channel.close();
  await connection.close();
}

main().catch((error: unknown) => {
  console.error("Publisher failed:", error);
  process.exit(1);
});
