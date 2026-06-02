// ============================================
// 2. МОДИФИКАТОРЫ ДОСТУПА (Access Modifiers)
// ============================================

export class BankAccount {
    // public - доступно везде (по умолчанию)
    public accountHolder: string;
    
    // private - доступно только внутри класса
    private balance: number;
    
    // protected - доступно в классе и наследниках
    protected accountNumber: string;

    constructor(holder: string, initialBalance: number) {
        this.accountHolder = holder;
        this.balance = initialBalance;
        this.accountNumber = this.generateAccountNumber();
    }

    private generateAccountNumber(): string {
        return 'ACC' + Math.floor(Math.random() * 1000000);
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Внесено: ${amount}₽. Баланс: ${this.balance}₽`);
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Снято: ${amount}₽. Баланс: ${this.balance}₽`);
        } else {
            console.log('Недостаточно средств');
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}

