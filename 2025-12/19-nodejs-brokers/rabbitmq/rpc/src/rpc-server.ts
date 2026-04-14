import amqp, { ConsumeMessage } from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL ?? "amqp://guest:guest@localhost:5673";
const RPC_QUEUE = "math.rpc";

function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

async function main() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();

  await channel.assertQueue(RPC_QUEUE, { durable: false });
  channel.prefetch(1);

  console.log(" [x] RPC server is waiting for requests:", RPC_QUEUE);

  channel.consume(
    RPC_QUEUE,
    (msg: ConsumeMessage | null) => {
      if (!msg) {
        return;
      }

      const request = JSON.parse(msg.content.toString()) as { n?: number };

      console.log('Request', request);
      const n = Number(request.n ?? 0);
      const response = { n, result: fibonacci(n) };

      channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
        correlationId: msg.properties.correlationId,
      });
      channel.ack(msg);
    },
    { noAck: false }
  );
}

main().catch((error: unknown) => {
  console.error("RPC server failed:", error);
  process.exit(1);
});
