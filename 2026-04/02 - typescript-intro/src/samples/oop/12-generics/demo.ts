import { Stack } from './Stack';
import { identity, pair, filter, map } from './GenericFunctions';
import { ArrayList } from './GenericInterfaces';
import { getProperty, merge, Person } from './GenericConstraints';
import { Queue, Box, Dictionary, Result, Optional } from './GenericClasses';
import { updateUser, sanitizeUser, rolePermissions } from './UtilityTypes';
import { Factory, Builder, Observable, Observer, Cache } from './AdvancedGenerics';

export function demoGenerics(): void {
    console.log('========================================');
    console.log('12. GENERICS - COMPREHENSIVE EXAMPLES');
    console.log('========================================\n');

    // 1. GENERIC FUNCTIONS
    console.log('1. GENERIC FUNCTIONS:');
    console.log('identity:', identity<number>(42));
    console.log('identity:', identity<string>('Hello'));
    console.log('pair:', pair<string, number>('age', 25));
    
    const numbers = [1, 2, 3, 4, 5, 6];
    const evens = filter(numbers, n => n % 2 === 0);
    console.log('filter evens:', evens);
    
    const doubled = map(numbers, n => n * 2);
    console.log('map doubled:', doubled);
    console.log('');

    // 2. GENERIC INTERFACES & CLASSES
    console.log('2. GENERIC COLLECTIONS:');
    const list = new ArrayList<string>();
    list.add('Apple');
    list.add('Banana');
    list.add('Cherry');
    console.log('ArrayList size:', list.size());
    console.log('ArrayList contains Banana:', list.contains('Banana'));
    console.log('ArrayList items:', list.toArray());
    console.log('');

    // 3. STACK (Original)
    console.log('3. STACK:');
    const numberStack = new Stack<number>();
    numberStack.push(1);
    numberStack.push(2);
    numberStack.push(3);
    console.log(`Stack size: ${numberStack.size()}, top: ${numberStack.peek()}`);
    console.log('Pop:', numberStack.pop());
    console.log('');

    // 4. QUEUE
    console.log('4. QUEUE:');
    const queue = new Queue<string>();
    queue.enqueue('First');
    queue.enqueue('Second');
    queue.enqueue('Third');
    console.log('Dequeue:', queue.dequeue());
    console.log('Peek:', queue.peek());
    console.log('');

    // 5. BOX (Functor)
    console.log('5. BOX (FUNCTOR):');
    const box = new Box(10);
    const mappedBox = box.map(x => x * 2).map(x => `Value: ${x}`);
    console.log('Mapped box:', mappedBox.getValue());
    console.log('');

    // 6. DICTIONARY
    console.log('6. DICTIONARY:');
    const dict = new Dictionary<string, number>();
    dict.set('one', 1);
    dict.set('two', 2);
    dict.set('three', 3);
    console.log('Dictionary get "two":', dict.get('two'));
    console.log('Dictionary keys:', dict.keys());
    console.log('Dictionary values:', dict.values());
    console.log('');

    // 7. RESULT (Error Handling)
    console.log('7. RESULT (ERROR HANDLING):');
    const successResult = Result.ok<number>(42);
    const errorResult = Result.err<number>(new Error('Something went wrong'));
    console.log('Success result:', successResult.isOk(), successResult.unwrap());
    console.log('Error result:', errorResult.isErr(), errorResult.unwrapOr(0));
    console.log('');

    // 8. OPTIONAL
    console.log('8. OPTIONAL:');
    const presentValue = Optional.of(100);
    const emptyValue = Optional.empty<number>();
    console.log('Present:', presentValue.isPresent(), presentValue.orElse(0));
    console.log('Empty:', emptyValue.isPresent(), emptyValue.orElse(0));
    
    const doubled2 = presentValue.map(x => x * 2);
    console.log('Mapped optional:', doubled2.get());
    console.log('');

    // 9. GENERIC CONSTRAINTS
    console.log('9. GENERIC CONSTRAINTS:');
    const person1 = new Person('Alice', 30);
    const person2 = new Person('Bob', 25);
    console.log('Person compareTo:', person1.compareTo(person2));
    
    const user = { name: 'John', age: 30, email: 'john@example.com' };
    console.log('getProperty name:', getProperty(user, 'name'));
    console.log('getProperty age:', getProperty(user, 'age'));
    
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    console.log('merge:', merge(obj1, obj2));
    console.log('');

    // 10. UTILITY TYPES
    console.log('10. UTILITY TYPES:');
    const user1 = {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        password: 'secret123',
        age: 30,
        isActive: true
    };
    
    const updated = updateUser(user1, { age: 31, isActive: false });
    console.log('Updated user age:', updated.age);
    
    const safe = sanitizeUser(user1);
    console.log('Sanitized user (no password):', safe);
    
    console.log('Role permissions:', rolePermissions.admin);
    console.log('');

    // 11. FACTORY PATTERN
    console.log('11. FACTORY PATTERN:');
    const factory = new Factory(() => ({ id: Date.now(), value: Math.random() }));
    const instance = factory.create();
    console.log('Factory created:', instance);
    console.log('');

    // 12. BUILDER PATTERN
    console.log('12. BUILDER PATTERN:');
    interface Product {
        name: string;
        price: number;
        category: string;
    }
    
    const builder = new Builder<Product>();
    const product = builder
        .set('name', 'Laptop')
        .set('price', 999)
        .set('category', 'Electronics')
        .build();
    console.log('Built product:', product);
    console.log('');

    // 13. OBSERVER PATTERN
    console.log('13. OBSERVER PATTERN:');
    const observable = new Observable<string>();
    
    const observer1: Observer<string> = {
        update: (data) => console.log('Observer 1 received:', data)
    };
    
    const observer2: Observer<string> = {
        update: (data) => console.log('Observer 2 received:', data)
    };
    
    observable.subscribe(observer1);
    observable.subscribe(observer2);
    observable.notify('Hello Observers!');
    console.log('');

    // 14. CACHE
    console.log('14. CACHE:');
    const cache = new Cache<string, number>(5000); // 5 seconds TTL
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
