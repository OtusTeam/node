"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoModulePatterns = demoModulePatterns;
var singleton_1 = require("./singleton");
var config_1 = require("./config");
function demoModulePatterns() {
    console.log("\n--- 6. Паттерны модулей ---");
    // Singleton pattern
    console.log("\nSingleton Pattern:");
    singleton_1.database.connect();
    singleton_1.database.connect();
    singleton_1.database.disconnect();
    // Configuration pattern
    console.log("\nConfiguration Pattern:");
    console.log("Ready?", (0, config_1.isReady)());
    (0, config_1.initialize)();
    console.log("Ready?", (0, config_1.isReady)());
    console.log("Config:", (0, config_1.getConfig)());
    (0, config_1.setApiUrl)("https://new-api.example.com");
    console.log("Updated config:", (0, config_1.getConfig)());
}
