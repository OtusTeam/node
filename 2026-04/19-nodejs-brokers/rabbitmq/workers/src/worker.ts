import amqp, { ConsumeMessage } from "amqplib";

const RABBITMQ_URL = process.env.RABBITMQ_URL ?? "amqp://guest:guest@localhost:5673";
const QUEUE = "tasks";

type TaskPayload = {
  taskId: number;
  createdAt: string;
  text: string;
  secondsToProcess: number;
};

async function main() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();

  await channel.assertQueue(QUEUE, { durable: true });
  channel.prefetch(1);

  console.log(" [*] Worker is waiting for tasks in queue:", QUEUE);

  channel.consume(
    QUEUE,
    (msg: ConsumeMessage | null) => {
      if (!msg) {
        return;
      }

      const payload = JSON.parse(msg.content.toString()) as TaskPayload;
      console.log(" [>] Received task:", payload);

      setTimeout(() => {
        console.log(" [v] Processed task:", payload.taskId);
        channel.ack(msg);
      }, payload.secondsToProcess * 1000);
    },
    { noAck: false }
  );
}

main().catch((error: unknown) => {
  console.error("Worker failed:", error);
  process.exit(1);
});
