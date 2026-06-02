// ============================================
// 10. СОКРАЩЁННАЯ ЗАПИСЬ КОНСТРУКТОРА
// ============================================

export class User {
    // Параметры конструктора автоматически становятся свойствами
    constructor(
        public username: string,
        private password: string,
        public email: string,
        public readonly id: number
    ) {}

    authenticate(inputPassword: string): boolean {
        return this.password === inputPassword;
    }

    getInfo(): string {
        return `User: ${this.username} (${this.email}) [ID: ${this.id}]`;
    }
}

