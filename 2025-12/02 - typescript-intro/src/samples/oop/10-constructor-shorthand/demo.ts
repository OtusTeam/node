import { User } from './User';

export function demoConstructorShorthand(): void {
    console.log('10. СОКРАЩЁННАЯ ЗАПИСЬ КОНСТРУКТОРА');
    
    const user = new User("john_doe", "secret123", "john@example.com", 1001);
    console.log(user.getInfo());
    console.log(`Аутентификация: ${user.authenticate("secret123")}`);
    console.log('');
}

