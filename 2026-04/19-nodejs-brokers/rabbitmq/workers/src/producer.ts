import amqp from "amqplib";

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

  for (let i = 1; i <= 20; i += 1) {
    const payload: TaskPayload = {
      taskId: i,
      createdAt: new Date().toISOString(),
      text: `Task #${i}`,
      secondsToProcess: (i % 5) + 1,
    };

    channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(payload)), {
      persistent: true,
    });
    console.log(" [x] Sent task:", payload);
  }

  await channel.close();
  await connection.close();
}

main().catch((error: unknown) => {
  console.error("Producer failed:", error);
  process.exit(1);
});
