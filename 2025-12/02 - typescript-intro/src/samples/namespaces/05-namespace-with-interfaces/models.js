// ============================================
// 5. NAMESPACES С ИНТЕРФЕЙСАМИ И ТИПАМИ
// ============================================
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Database;
(function (Database) {
    // Енум
    var ConnectionStatus;
    (function (ConnectionStatus) {
        ConnectionStatus["Connected"] = "CONNECTED";
        ConnectionStatus["Disconnected"] = "DISCONNECTED";
        ConnectionStatus["Connecting"] = "CONNECTING";
        ConnectionStatus["Error"] = "ERROR";
    })(ConnectionStatus = Database.ConnectionStatus || (Database.ConnectionStatus = {}));
    // Классы
    var Repository = /** @class */ (function () {
        function Repository() {
            this.items = [];
        }
        Repository.prototype.add = function (item) {
            this.items.push(item);
        };
        Repository.prototype.getAll = function () {
            return __spreadArray([], this.items, true);
        };
        Repository.prototype.count = function () {
            return this.items.length;
        };
        return Repository;
    }());
    Database.Repository = Repository;
    // Утилитарные функции
    function createQueryResult(data, page) {
        if (page === void 0) { page = 1; }
        return {
            data: data,
            total: data.length,
            page: page,
        };
    }
    Database.createQueryResult = createQueryResult;
})(Database || (Database = {}));
// Использование
console.log("\n--- 5. Namespaces с интерфейсами и типами ---");
var userRepo = new Database.Repository();
var user1 = {
    id: 1,
    name: "Иван Иванов",
    email: "ivan@example.com",
    createdAt: new Date(),
};
var user2 = {
    id: 2,
    name: "Мария Петрова",
    email: "maria@example.com",
    createdAt: new Date(),
};
userRepo.add(user1);
userRepo.add(user2);
console.log("Пользователи:", userRepo.getAll());
console.log("Всего пользователей:", userRepo.count());
var queryResult = Database.createQueryResult(userRepo.getAll(), 1);
console.log("Query Result:", queryResult);
console.log("Connection Status:", Database.ConnectionStatus.Connected);
