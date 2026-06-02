"use strict";
// ============================================
// ADVANCED GENERICS (Продвинутые обобщения)
// ============================================
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = exports.EventEmitter = exports.Lazy = exports.Originator = exports.Memento = exports.StateMachine = exports.AsyncResult = exports.Observable = exports.Builder = exports.Factory = void 0;
// Generic фабрика
var Factory = /** @class */ (function () {
    function Factory(creator) {
        this.creator = creator;
    }
    Factory.prototype.create = function () {
        return this.creator();
    };
    Factory.prototype.createMultiple = function (count) {
        var _this = this;
        return Array.from({ length: count }, function () { return _this.create(); });
    };
    return Factory;
}());
exports.Factory = Factory;
// Generic Builder Pattern
var Builder = /** @class */ (function () {
    function Builder() {
        this.instance = {};
    }
    Builder.prototype.set = function (key, value) {
        this.instance[key] = value;
        return this;
    };
    Builder.prototype.build = function () {
        return this.instance;
    };
    return Builder;
}());
exports.Builder = Builder;
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.unsubscribe = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };
    Observable.prototype.notify = function (data) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(data);
        }
    };
    return Observable;
}());
exports.Observable = Observable;
// Generic Promise wrapper
var AsyncResult = /** @class */ (function () {
    function AsyncResult(promise) {
        this.promise = promise;
    }
    AsyncResult.prototype.map = function (fn) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.promise];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, new AsyncResult(Promise.resolve(fn(value)))];
                }
            });
        });
    };
    AsyncResult.prototype.flatMap = function (fn) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.promise];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, new AsyncResult(fn(value))];
                }
            });
        });
    };
    AsyncResult.prototype.getOrElse = function (defaultValue) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.promise];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, defaultValue];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AsyncResult.prototype.toPromise = function () {
        return this.promise;
    };
    return AsyncResult;
}());
exports.AsyncResult = AsyncResult;
// Generic State Machine
var StateMachine = /** @class */ (function () {
    function StateMachine(currentState) {
        this.currentState = currentState;
        this.transitions = new Map();
    }
    StateMachine.prototype.addTransition = function (from, event, to) {
        if (!this.transitions.has(from)) {
            this.transitions.set(from, new Map());
        }
        this.transitions.get(from).set(event, to);
    };
    StateMachine.prototype.trigger = function (event) {
        var stateTransitions = this.transitions.get(this.currentState);
        if (!stateTransitions)
            return false;
        var nextState = stateTransitions.get(event);
        if (!nextState)
            return false;
        this.currentState = nextState;
        return true;
    };
    StateMachine.prototype.getState = function () {
        return this.currentState;
    };
    return StateMachine;
}());
exports.StateMachine = StateMachine;
// Generic Memento Pattern
var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
    }
    Memento.prototype.getState = function () {
        return this.state;
    };
    return Memento;
}());
exports.Memento = Memento;
var Originator = /** @class */ (function () {
    function Originator(state) {
        this.state = state;
    }
    Originator.prototype.setState = function (state) {
        this.state = state;
    };
    Originator.prototype.getState = function () {
        return this.state;
    };
    Originator.prototype.saveToMemento = function () {
        return new Memento(JSON.parse(JSON.stringify(this.state)));
    };
    Originator.prototype.restoreFromMemento = function (memento) {
        this.state = memento.getState();
    };
    return Originator;
}());
exports.Originator = Originator;
// Generic Lazy initialization
var Lazy = /** @class */ (function () {
    function Lazy(initializer) {
        this.initializer = initializer;
        this.isInitialized = false;
    }
    Lazy.prototype.getValue = function () {
        if (!this.isInitialized) {
            this.value = this.initializer();
            this.isInitialized = true;
        }
        return this.value;
    };
    return Lazy;
}());
exports.Lazy = Lazy;
// Generic Event Emitter
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.listeners = {};
    }
    EventEmitter.prototype.on = function (event, listener) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    };
    EventEmitter.prototype.emit = function (event, data) {
        var eventListeners = this.listeners[event];
        if (eventListeners) {
            for (var _i = 0, eventListeners_1 = eventListeners; _i < eventListeners_1.length; _i++) {
                var listener = eventListeners_1[_i];
                listener(data);
            }
        }
    };
    EventEmitter.prototype.off = function (event, listener) {
        var eventListeners = this.listeners[event];
        if (eventListeners) {
            var index = eventListeners.indexOf(listener);
            if (index > -1) {
                eventListeners.splice(index, 1);
            }
        }
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
// Generic Cache
var Cache = /** @class */ (function () {
    function Cache(defaultTTL) {
        if (defaultTTL === void 0) { defaultTTL = 60000; }
        this.defaultTTL = defaultTTL;
        this.cache = new Map();
    } // Default 60 seconds
    Cache.prototype.set = function (key, value, ttl) {
        var expiry = Date.now() + (ttl !== null && ttl !== void 0 ? ttl : this.defaultTTL);
        this.cache.set(key, { value: value, expiry: expiry });
    };
    Cache.prototype.get = function (key) {
        var entry = this.cache.get(key);
        if (!entry)
            return undefined;
        if (Date.now() > entry.expiry) {
            this.cache.delete(key);
            return undefined;
        }
        return entry.value;
    };
    Cache.prototype.has = function (key) {
        return this.get(key) !== undefined;
    };
    Cache.prototype.delete = function (key) {
        return this.cache.delete(key);
    };
    Cache.prototype.clear = function () {
        this.cache.clear();
    };
    return Cache;
}());
exports.Cache = Cache;
