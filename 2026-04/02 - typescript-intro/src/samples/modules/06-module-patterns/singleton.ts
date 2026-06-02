// ============================================
// 6. ПАТТЕРНЫ МОДУЛЕЙ - Singleton
// ============================================

class Database {
  private static instance: Database;
  private connections: number = 0;

  private constructor() {
    console.log("Database instance created");
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  connect(): void {
    this.connections++;
    console.log(`Connected to database. Total connections: ${this.connections}`);
  }

  disconnect(): void {
    this.connections--;
    console.log(`Disconnected. Remaining connections: ${this.connections}`);
  }
}

// Экспортируем только метод getInstance
export const database = Database.getInstance();

