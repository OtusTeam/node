import { BankAccount } from './BankAccount';

export function demoAccessModifiers(): void {
    console.log('2. МОДИФИКАТОРЫ ДОСТУПА');
    
    const account = new BankAccount("Мария", 1000);
    account.deposit(500);
    account.withdraw(300);
    console.log(`Текущий баланс: ${account.getBalance()}₽`);
    // console.log(account.balance); // ❌ Ошибка: balance is private
    console.log('');
}

