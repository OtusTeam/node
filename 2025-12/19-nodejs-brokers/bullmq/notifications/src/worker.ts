import { Job, QueueEvents, Worker } from "bullmq";
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

async function sendNotification(data: NotificationJob) {
  const latencyMs = 200 + Math.floor(Math.random() * 800);
  await new Promise((resolve) => setTimeout(resolve, latencyMs));

  if (Math.random() < 0.2) {
    throw new Error(`Temporary provider error for recipient ${data.recipient}`);
  }

  console.log(
    ` [>] sent ${data.channel} notification to ${data.recipient} (userId=${data.userId})`
  );
}

async function main() {
  const queueEvents = new QueueEvents(QUEUE_NAME, { connection });
  await queueEvents.waitUntilReady();

  queueEvents.on("completed", ({ jobId }) => {
    console.log(` [v] completed job ${jobId}`);
  });

  queueEvents.on("failed", ({ jobId, failedReason }) => {
    console.log(` [!] failed job ${jobId}: ${failedReason}`);
  });

  const worker = new Worker<NotificationJob>(
    QUEUE_NAME,
    async (job: Job<NotificationJob>) => {
      await sendNotification(job.data);
      return { deliveredAt: new Date().toISOString() };
    },
    {
      connection,
      concurrency: 5,
    }
  );

  worker.on("error", (error) => {
    console.error("Worker error:", error);
  });

  console.log(` [*] Worker listening queue "${QUEUE_NAME}" on redis ${REDIS_HOST}:${REDIS_PORT}`);

  const shutdown = async () => {
    await worker.close();
    await queueEvents.close();
    await connection.quit();
    process.exit(0);
  };

  process.on("SIGINT", () => {
    void shutdown();
  });
  process.on("SIGTERM", () => {
    void shutdown();
  });
}

main().catch((error: unknown) => {
  console.error("Worker failed:", error);
  process.exit(1);
});
