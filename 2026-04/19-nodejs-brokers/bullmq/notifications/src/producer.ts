import { Queue } from "bullmq";
import IORedis from "ioredis";

const REDIS_HOST = process.env.REDIS_HOST ?? "127.0.0.1";
const REDIS_PORT = Number(process.env.REDIS_PORT ?? "6380");
const QUEUE_NAME = process.env.BULLMQ_QUEUE ?? "notifications";

const connection = new IORedis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  maxRetriesPerRequest: null,
});

type NotificationJob = {
  userId: number;
  channel: "email" | "push";
  recipient: string;
  message: string;
};

async function main() {
  const queue = new Queue<NotificationJob>(QUEUE_NAME, { connection });

  const jobs: NotificationJob[] = [
    {
      userId: 1,
      channel: "email",
      recipient: "anna@example.com",
      message: "Welcome to the platform!",
    },
    {
      userId: 2,
      channel: "push",
      recipient: "device-token-abc",
      message: "Your order has been shipped",
    },
    {
      userId: 3,
      channel: "email",
      recipient: "john@example.com",
      message: "Password reset link",
    },
  ];

  for (const jobData of jobs) {
    const job = await queue.add("send-notification", jobData, {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 1000,
      },
      removeOnComplete: 50,
      removeOnFail: 100,
    });
    console.log(" [x] Enqueued job:", job.id, jobData);
  }

  await queue.close();
  await connection.quit();
}

main().catch((error: unknown) => {
  console.error("Producer failed:", error);
  process.exit(1);
});
