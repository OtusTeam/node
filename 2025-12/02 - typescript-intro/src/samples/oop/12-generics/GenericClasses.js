"use strict";
// ============================================
// GENERIC CLASSES (Обобщенные классы)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optional = exports.Result = exports.Dictionary = exports.Box = exports.Queue = void 0;
// Generic класс Queue (очередь)
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.peek = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    return Queue;
}());
exports.Queue = Queue;
// Generic класс Box (контейнер)
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    Box.prototype.setValue = function (value) {
        this.value = value;
    };
    Box.prototype.map = function (fn) {
        return new Box(fn(this.value));
    };
    return Box;
}());
exports.Box = Box;
// Generic класс Dictionary (словарь)
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = new Map();
    }
    Dictionary.prototype.set = function (key, value) {
        this.items.set(key, value);
    };
    Dictionary.prototype.get = function (key) {
        return this.items.get(key);
    };
    Dictionary.prototype.has = function (key) {
        return this.items.has(key);
    };
    Dictionary.prototype.delete = function (key) {
        return this.items.delete(key);
    };
    Dictionary.prototype.keys = function () {
        return Array.from(this.items.keys());
    };
    Dictionary.prototype.values = function () {
        return Array.from(this.items.values());
    };
    Dictionary.prototype.entries = function () {
        return Array.from(this.items.entries());
    };
    Dictionary.prototype.size = function () {
        return this.items.size;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
// Generic класс Result для обработки ошибок
var Result = /** @class */ (function () {
    function Result(value, error) {
        this.value = value;
        this.error = error;
    }
    Result.ok = function (value) {
        return new Result(value, undefined);
    };
    Result.err = function (error) {
        return new Result(undefined, error);
    };
    Result.prototype.isOk = function () {
        return this.error === undefined;
    };
    Result.prototype.isErr = function () {
        return this.error !== undefined;
    };
    Result.prototype.unwrap = function () {
        if (this.isErr()) {
            throw new Error('Called unwrap on an Err value');
        }
        return this.value;
    };
    Result.prototype.unwrapOr = function (defaultValue) {
        return this.isOk() ? this.value : defaultValue;
    };
    Result.prototype.map = function (fn) {
        return this.isOk()
            ? Result.ok(fn(this.value))
            : Result.err(this.error);
    };
    return Result;
}());
exports.Result = Result;
// Generic класс Optional (аналог Java Optional)
var Optional = /** @class */ (function () {
    function Optional(value) {
        this.value = value;
    }
    Optional.of = function (value) {
        if (value === null || value === undefined) {
            throw new Error('Value cannot be null or undefined');
        }
        return new Optional(value);
    };
    Optional.ofNullable = function (value) {
        return new Optional(value);
    };
    Optional.empty = function () {
        return new Optional(null);
    };
    Optional.prototype.isPresent = function () {
        return this.value !== null && this.value !== undefined;
    };
    Optional.prototype.get = function () {
        if (!this.isPresent()) {
            throw new Error('No value present');
        }
        return this.value;
    };
    Optional.prototype.orElse = function (defaultValue) {
        return this.isPresent() ? this.value : defaultValue;
    };
    Optional.prototype.map = function (fn) {
        return this.isPresent()
            ? Optional.of(fn(this.value))
            : Optional.empty();
    };
    Optional.prototype.filter = function (predicate) {
        if (this.isPresent() && predicate(this.value)) {
            return this;
        }
        return Optional.empty();
    };
    return Optional;
}());
exports.Optional = Optional;
