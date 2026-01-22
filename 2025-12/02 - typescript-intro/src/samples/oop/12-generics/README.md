# Generics in TypeScript - Complete Guide

This folder contains comprehensive examples of generics in TypeScript, covering everything from basic concepts to advanced patterns.

## 📁 Files Overview

### 1. **Stack.ts** - Original Stack Implementation
- Basic generic Stack data structure
- LIFO (Last In, First Out) operations

### 2. **GenericFunctions.ts** - Generic Functions
Common generic function patterns:
- `identity<T>` - Identity function
- `getFirstElement<T>` - Array operations
- `pair<T, U>` - Multiple type parameters
- `filter<T>`, `map<T, U>`, `find<T>` - Higher-order functions

### 3. **GenericInterfaces.ts** - Generic Interfaces
Reusable interface patterns:
- `KeyValuePair<K, V>` - Key-value pairs
- `ApiResponse<T>` - API response wrapper
- `Collection<T>` - Collection interface
- `Repository<T, ID>` - Repository pattern
- `ArrayList<T>` - Collection implementation

### 4. **GenericConstraints.ts** - Constraints & Bounds
Advanced type constraints:
- `extends { length: number }` - Property constraints
- `extends Identifiable` - Interface constraints
- `keyof T` - Key constraints
- `extends object` - Object constraints
- `Comparable<T>` - Comparison interface
- Merging objects with generics

### 5. **GenericClasses.ts** - Generic Classes
Essential generic class patterns:
- `Queue<T>` - FIFO data structure
- `Box<T>` - Functor pattern
- `Dictionary<K, V>` - Map wrapper
- `Result<T, E>` - Error handling (Rust-style)
- `Optional<T>` - Null safety (Java-style)

### 6. **UtilityTypes.ts** - TypeScript Utility Types
Built-in and custom utility types:
- `Partial<T>`, `Required<T>`, `Readonly<T>`
- `Pick<T, K>`, `Omit<T, K>`
- `Record<K, T>`, `Exclude<T, U>`, `Extract<T, U>`
- `ReturnType<T>`, `Parameters<T>`
- Custom: `DeepPartial<T>`, `DeepReadonly<T>`, `Nullable<T>`
- Conditional types and mapped types

### 7. **AdvancedGenerics.ts** - Advanced Patterns
Design patterns with generics:
- **Factory Pattern** - Generic object creation
- **Builder Pattern** - Fluent API construction
- **Observer Pattern** - Event subscription
- **Memento Pattern** - State snapshots
- **AsyncResult** - Promise wrapper
- **StateMachine<S, E>** - Generic state machine
- **EventEmitter<Events>** - Type-safe events
- **Cache<K, V>** - Generic caching
- **Lazy<T>** - Lazy initialization

### 8. **demo.ts** - Comprehensive Demo
Demonstrates all patterns with working examples.

## 🎯 Key Concepts Covered

### Basic Generics
```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

### Multiple Type Parameters
```typescript
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}
```

### Generic Constraints
```typescript
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}
```

### Generic Classes
```typescript
class Box<T> {
    constructor(private value: T) {}
    getValue(): T { return this.value; }
}
```

### Generic Interfaces
```typescript
interface Repository<T, ID> {
    findById(id: ID): Promise<T | null>;
    save(entity: T): Promise<T>;
}
```

### Utility Types
```typescript
type UserPreview = Pick<User, 'id' | 'name' | 'email'>;
type SafeUser = Omit<User, 'password'>;
```

## 🚀 Running the Examples

```bash
# Compile TypeScript
tsc src/samples/oop/12-generics/demo.ts

# Run the demo
node src/samples/oop/12-generics/demo.js

# Or use ts-node directly
ts-node src/samples/oop/12-generics/demo.ts
```

## 💡 Use Cases

### 1. **Type-Safe Collections**
Use `Stack<T>`, `Queue<T>`, `Dictionary<K, V>` for type-safe data structures.

### 2. **Error Handling**
Use `Result<T, E>` for functional error handling without exceptions.

### 3. **Null Safety**
Use `Optional<T>` to explicitly handle nullable values.

### 4. **API Responses**
Use `ApiResponse<T>` to wrap API responses with metadata.

### 5. **Repository Pattern**
Use `Repository<T, ID>` for database access layer.

### 6. **Event Systems**
Use `EventEmitter<Events>` for type-safe event handling.

### 7. **State Management**
Use `StateMachine<S, E>` for complex state transitions.

### 8. **Caching**
Use `Cache<K, V>` for generic caching with TTL.

## 📚 Best Practices

1. **Use meaningful type parameter names**
   - `T` for Type
   - `K` for Key
   - `V` for Value
   - `E` for Element or Error
   - `R` for Return type

2. **Apply constraints when needed**
   ```typescript
   <T extends Comparable<T>>
   ```

3. **Prefer generic functions over any**
   ```typescript
   // Good
   function process<T>(item: T): T
   
   // Avoid
   function process(item: any): any
   ```

4. **Use utility types**
   ```typescript
   type UserUpdate = Partial<User>;
   type PublicUser = Omit<User, 'password'>;
   ```

5. **Leverage type inference**
   ```typescript
   const result = identity(42); // Type is inferred as number
   ```

## 🎓 Learning Path

1. Start with **GenericFunctions.ts** - understand basic syntax
2. Move to **GenericInterfaces.ts** - learn interface patterns
3. Study **GenericConstraints.ts** - master constraints
4. Practice with **GenericClasses.ts** - build data structures
5. Explore **UtilityTypes.ts** - TypeScript built-ins
6. Challenge yourself with **AdvancedGenerics.ts** - design patterns

## 🔗 Related Topics

- Type Inference
- Conditional Types
- Mapped Types
- Template Literal Types
- Variance (Covariance & Contravariance)
- Higher-Kinded Types (HKT)

## 📖 References

- [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [TypeScript Handbook - Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

