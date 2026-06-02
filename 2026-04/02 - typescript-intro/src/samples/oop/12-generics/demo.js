"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoGenerics = demoGenerics;
var Stack_1 = require("./Stack");
var GenericFunctions_1 = require("./GenericFunctions");
var GenericInterfaces_1 = require("./GenericInterfaces");
var GenericConstraints_1 = require("./GenericConstraints");
var GenericClasses_1 = require("./GenericClasses");
var UtilityTypes_1 = require("./UtilityTypes");
var AdvancedGenerics_1 = require("./AdvancedGenerics");
function demoGenerics() {
    console.log('========================================');
    console.log('12. GENERICS - COMPREHENSIVE EXAMPLES');
    console.log('========================================\n');
    // 1. GENERIC FUNCTIONS
    console.log('1. GENERIC FUNCTIONS:');
    console.log('identity:', (0, GenericFunctions_1.identity)(42));
    console.log('identity:', (0, GenericFunctions_1.identity)('Hello'));
    console.log('pair:', (0, GenericFunctions_1.pair)('age', 25));
    var numbers = [1, 2, 3, 4, 5, 6];
    var evens = (0, GenericFunctions_1.filter)(numbers, function (n) { return n % 2 === 0; });
    console.log('filter evens:', evens);
    var doubled = (0, GenericFunctions_1.map)(numbers, function (n) { return n * 2; });
    console.log('map doubled:', doubled);
    console.log('');
    // 2. GENERIC INTERFACES & CLASSES
    console.log('2. GENERIC COLLECTIONS:');
    var list = new GenericInterfaces_1.ArrayList();
    list.add('Apple');
    list.add('Banana');
    list.add('Cherry');
    console.log('ArrayList size:', list.size());
    console.log('ArrayList contains Banana:', list.contains('Banana'));
    console.log('ArrayList items:', list.toArray());
    console.log('');
    // 3. STACK (Original)
    console.log('3. STACK:');
    var numberStack = new Stack_1.Stack();
    numberStack.push(1);
    numberStack.push(2);
    numberStack.push(3);
    console.log("Stack size: ".concat(numberStack.size(), ", top: ").concat(numberStack.peek()));
    console.log('Pop:', numberStack.pop());
    console.log('');
    // 4. QUEUE
    console.log('4. QUEUE:');
    var queue = new GenericClasses_1.Queue();
    queue.enqueue('First');
    queue.enqueue('Second');
    queue.enqueue('Third');
    console.log('Dequeue:', queue.dequeue());
    console.log('Peek:', queue.peek());
    console.log('');
    // 5. BOX (Functor)
    console.log('5. BOX (FUNCTOR):');
    var box = new GenericClasses_1.Box(10);
    var mappedBox = box.map(function (x) { return x * 2; }).map(function (x) { return "Value: ".concat(x); });
    console.log('Mapped box:', mappedBox.getValue());
    console.log('');
    // 6. DICTIONARY
    console.log('6. DICTIONARY:');
    var dict = new GenericClasses_1.Dictionary();
    dict.set('one', 1);
    dict.set('two', 2);
    dict.set('three', 3);
    console.log('Dictionary get "two":', dict.get('two'));
    console.log('Dictionary keys:', dict.keys());
    console.log('Dictionary values:', dict.values());
    console.log('');
    // 7. RESULT (Error Handling)
    console.log('7. RESULT (ERROR HANDLING):');
    var successResult = GenericClasses_1.Result.ok(42);
    var errorResult = GenericClasses_1.Result.err(new Error('Something went wrong'));
    console.log('Success result:', successResult.isOk(), successResult.unwrap());
    console.log('Error result:', errorResult.isErr(), errorResult.unwrapOr(0));
    console.log('');
    // 8. OPTIONAL
    console.log('8. OPTIONAL:');
    var presentValue = GenericClasses_1.Optional.of(100);
    var emptyValue = GenericClasses_1.Optional.empty();
    console.log('Present:', presentValue.isPresent(), presentValue.orElse(0));
    console.log('Empty:', emptyValue.isPresent(), emptyValue.orElse(0));
    var doubled2 = presentValue.map(function (x) { return x * 2; });
    console.log('Mapped optional:', doubled2.get());
    console.log('');
    // 9. GENERIC CONSTRAINTS
    console.log('9. GENERIC CONSTRAINTS:');
    var person1 = new GenericConstraints_1.Person('Alice', 30);
    var person2 = new GenericConstraints_1.Person('Bob', 25);
    console.log('Person compareTo:', person1.compareTo(person2));
    var user = { name: 'John', age: 30, email: 'john@example.com' };
    console.log('getProperty name:', (0, GenericConstraints_1.getProperty)(user, 'name'));
    console.log('getProperty age:', (0, GenericConstraints_1.getProperty)(user, 'age'));
    var obj1 = { a: 1, b: 2 };
    var obj2 = { c: 3, d: 4 };
    console.log('merge:', (0, GenericConstraints_1.merge)(obj1, obj2));
    console.log('');
    // 10. UTILITY TYPES
    console.log('10. UTILITY TYPES:');
    var user1 = {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        password: 'secret123',
        age: 30,
        isActive: true
    };
    var updated = (0, UtilityTypes_1.updateUser)(user1, { age: 31, isActive: false });
    console.log('Updated user age:', updated.age);
    var safe = (0, UtilityTypes_1.sanitizeUser)(user1);
    console.log('Sanitized user (no password):', safe);
    console.log('Role permissions:', UtilityTypes_1.rolePermissions.admin);
    console.log('');
    // 11. FACTORY PATTERN
    console.log('11. FACTORY PATTERN:');
    var factory = new AdvancedGenerics_1.Factory(function () { return ({ id: Date.now(), value: Math.random() }); });
    var instance = factory.create();
    console.log('Factory created:', instance);
    console.log('');
    // 12. BUILDER PATTERN
    console.log('12. BUILDER PATTERN:');
    var builder = new AdvancedGenerics_1.Builder();
    var product = builder
        .set('name', 'Laptop')
        .set('price', 999)
        .set('category', 'Electronics')
        .build();
    console.log('Built product:', product);
    console.log('');
    // 13. OBSERVER PATTERN
    console.log('13. OBSERVER PATTERN:');
    var observable = new AdvancedGenerics_1.Observable();
    var observer1 = {
        update: function (data) { return console.log('Observer 1 received:', data); }
    };
    var observer2 = {
        update: function (data) { return console.log('Observer 2 received:', data); }
    };
    observable.subscribe(observer1);
    observable.subscribe(observer2);
    observable.notify('Hello Observers!');
    console.log('');
    // 14. CACHE
    console.log('14. CACHE:');
    var cache = new AdvancedGenerics_1.Cache(5000); // 5 seconds TTL
    cache.set('key1', 100);
    cache.set('key2', 200);
    console.log('Cache get key1:', cache.get('key1'));
    console.log('Cache has key2:', cache.has('key2'));
    console.log('Cache has key3:', cache.has('key3'));
    console.log('');
    console.log('========================================');
    console.log('GENERICS DEMO COMPLETED!');
    console.log('========================================');
}
// Run the demo if this file is executed directly
if (require.main === module) {
    demoGenerics();
}
