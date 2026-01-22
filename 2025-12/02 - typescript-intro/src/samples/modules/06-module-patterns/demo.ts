import { database } from "./singleton";
import { getConfig, setApiUrl, initialize, isReady } from "./config";

export function demoModulePatterns(): void {
  console.log("\n--- 6. Паттерны модулей ---");

  // Singleton pattern
  console.log("\nSingleton Pattern:");
  database.connect();
  database.connect();
  database.disconnect();

  // Configuration pattern
  console.log("\nConfiguration Pattern:");
  console.log("Ready?", isReady());

  initialize();
  console.log("Ready?", isReady());

  console.log("Config:", getConfig());

  setApiUrl("https://new-api.example.com");
  console.log("Updated config:", getConfig());
}

