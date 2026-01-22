import { IConfig } from './ICalculator';
import { Calculator, simpleCalculator } from './Calculator';

export function demoAdvancedInterfaces(): void {
    console.log('15. ПРОДВИНУТЫЕ ИНТЕРФЕЙСЫ (Advanced Interfaces)');
    
    // Калькулятор через класс
    const calc = new Calculator();
    console.log(`10 + 5 = ${calc.add(10, 5)}`);
    console.log(`10 - 5 = ${calc.subtract(10, 5)}`);
    console.log(`10 * 5 = ${calc.multiply(10, 5)}`);
    console.log(`10 / 5 = ${calc.divide(10, 5)}`);
    
    // Калькулятор через объект
    console.log('\nПростой калькулятор:');
    console.log(`20 + 3 = ${simpleCalculator.add(20, 3)}`);
    console.log(`20 * 3 = ${simpleCalculator.multiply(20, 3)}`);
    
    // Конфигурация с опциональными свойствами
    const config: IConfig = {
        apiUrl: "https://api.example.com",
        version: "1.0.0"
    };
    
    const configWithTimeout: IConfig = {
        apiUrl: "https://api.example.com",
        timeout: 5000,
        retries: 3,
        version: "2.0.0"
    };
    
    console.log('\nКонфигурация 1:');
    console.log(`API: ${config.apiUrl}`);
    console.log(`Version: ${config.version}`);
    console.log(`Timeout: ${config.timeout ?? 'default'}`);
    
    console.log('\nКонфигурация 2:');
    console.log(`API: ${configWithTimeout.apiUrl}`);
    console.log(`Timeout: ${configWithTimeout.timeout}ms`);
    console.log(`Retries: ${configWithTimeout.retries}`);
    
    console.log('');
}

