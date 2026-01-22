// ============================================
// 5. NAMESPACES С ИНТЕРФЕЙСАМИ И ТИПАМИ
// ============================================

namespace Database {
  // Интерфейсы
  export interface IUser {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }

  export interface IProduct {
    id: number;
    title: string;
    price: number;
    inStock: boolean;
  }

  // Типы
  export type UserId = number;
  export type ProductId = number;

  export type QueryResult<T> = {
    data: T[];
    total: number;
    page: number;
  };

  // Енум
  export enum ConnectionStatus {
    Connected = "CONNECTED",
    Disconnected = "DISCONNECTED",
    Connecting = "CONNECTING",
    Error = "ERROR",
  }

  // Классы
  export class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
      this.items.push(item);
    }

    getAll(): T[] {
      return [...this.items];
    }

    count(): number {
      return this.items.length;
    }
  }

  // Утилитарные функции
  export function createQueryResult<T>(
    data: T[],
    page: number = 1
  ): QueryResult<T> {
    return {
      data,
      total: data.length,
      page,
    };
  }
}

// Использование
console.log("\n--- 5. Namespaces с интерфейсами и типами ---");

const userRepo = new Database.Repository<Database.IUser>();

const user1: Database.IUser = {
  id: 1,
  name: "Иван Иванов",
  email: "ivan@example.com",
  createdAt: new Date(),
};

const user2: Database.IUser = {
  id: 2,
  name: "Мария Петрова",
  email: "maria@example.com",
  createdAt: new Date(),
};

userRepo.add(user1);
userRepo.add(user2);

console.log("Пользователи:", userRepo.getAll());
console.log("Всего пользователей:", userRepo.count());

const queryResult = Database.createQueryResult(userRepo.getAll(), 1);
console.log("Query Result:", queryResult);

console.log(
  "Connection Status:",
  Database.ConnectionStatus.Connected
);

