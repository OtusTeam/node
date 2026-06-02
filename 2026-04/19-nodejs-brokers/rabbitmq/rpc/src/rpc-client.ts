import amqp, { ConsumeMessage } from "amqplib";
import crypto from "node:crypto";

const RABBITMQ_URL = process.env.RABBITMQ_URL ?? "amqp://guest:guest@localhost:5673";
const RPC_QUEUE = "math.rpc";

async function main() {
  const n = Number(process.argv[2] ?? "10");
  const correlationId = crypto.randomUUID();

  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();

  const replyQueue = await channel.assertQueue("", { exclusive: true });
  const request = { n };

  channel.consume(
    replyQueue.queue,
    (msg: ConsumeMessage | null) => {
      if (!msg) {
        return;
      }

      if (msg.properties.correlationId === correlationId) {
        const data = JSON.parse(msg.content.toString()) as { n: number; result: number };
        console.log(" [.] RPC response:", data);
        void channel.close();
        void connection.close();
      }
    },
    { noAck: true }
  );

  channel.sendToQueue(RPC_QUEUE, Buffer.from(JSON.stringify(request)), {
    correlationId,
    replyTo: replyQueue.queue,
  });

  console.log(` [x] Requested fibonacci(${n}), waiting for response...`);
}

main().catch((error: unknown) => {
  console.error("RPC client failed:", error);
  process.exit(1);
});
