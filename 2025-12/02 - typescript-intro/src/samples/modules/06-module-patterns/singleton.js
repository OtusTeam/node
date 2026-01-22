"use strict";
// ============================================
// 6. ПАТТЕРНЫ МОДУЛЕЙ - Singleton
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
var Database = /** @class */ (function () {
    function Database() {
        this.connections = 0;
        console.log("Database instance created");
    }
    Database.getInstance = function () {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    };
    Database.prototype.connect = function () {
        this.connections++;
        console.log("Connected to database. Total connections: ".concat(this.connections));
    };
    Database.prototype.disconnect = function () {
        this.connections--;
        console.log("Disconnected. Remaining connections: ".concat(this.connections));
    };
    return Database;
}());
// Экспортируем только метод getInstance
exports.database = Database.getInstance();
