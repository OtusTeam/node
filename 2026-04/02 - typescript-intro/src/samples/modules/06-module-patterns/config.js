"use strict";
// ============================================
// 6. ПАТТЕРНЫ МОДУЛЕЙ - Configuration
// ============================================
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = getConfig;
exports.setApiUrl = setApiUrl;
exports.initialize = initialize;
exports.isReady = isReady;
// Module pattern для конфигурации
var config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
};
// Приватные переменные
var isInitialized = false;
// Публичный API
function getConfig() {
    return __assign({}, config); // Возвращаем копию
}
function setApiUrl(url) {
    config.apiUrl = url;
}
function initialize() {
    if (!isInitialized) {
        console.log("Config initialized");
        isInitialized = true;
    }
    else {
        console.log("Config already initialized");
    }
}
function isReady() {
    return isInitialized;
}
