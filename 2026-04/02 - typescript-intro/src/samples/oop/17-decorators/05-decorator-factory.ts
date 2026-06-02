// ============================================
// 5. ФАБРИКА ДЕКОРАТОРОВ (Decorator Factory)
// ============================================

// Фабрика декораторов с параметрами
function Component(options: { selector: string; template: string }) {
    return function<T extends { new(...args: any[]): {} }>(constructor: T) {
        console.log(`Компонент создан: ${options.selector}`);
        
        return class extends constructor {
            selector = options.selector;
            template = options.template;
        };
    };
}

// Фабрика для минимального/максимального значения
function range(min: number, max: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        
        descriptor.value = function(...args: any[]) {
            const value = args[0];
            if (value < min || value > max) {
                throw new Error(`Значение должно быть между ${min} и ${max}`);
            }
            return originalMethod.apply(this, args);
        };
        
        return descriptor;
    };
}

// Фабрика для задержки выполнения
function delay(milliseconds: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        
        descriptor.value = async function(...args: any[]) {
            console.log(`Задержка ${milliseconds}мс перед ${propertyKey}...`);
            await new Promise(resolve => setTimeout(resolve, milliseconds));
            return originalMethod.apply(this, args);
        };
        
        return descriptor;
    };
}

@Component({
    selector: 'app-header',
    template: '<header>Заголовок</header>'
})
export class HeaderComponent {
    constructor() {}
}

export class AgeValidator {
    setAge(age: number): void {
        // Валидация возраста (0-120)
        if (age < 0 || age > 120) {
            throw new Error(`Значение должно быть между 0 и 120`);
        }
        console.log(`Возраст установлен: ${age}`);
    }
}

export class NotificationService {
    async sendNotification(message: string): Promise<void> {
        // Задержка 1000мс
        console.log('Задержка 1000мс перед sendNotification...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Уведомление отправлено: ${message}`);
    }
}

export async function demoDecoratorFactory(): Promise<void> {
    console.log('\n--- 5. Фабрики декораторов ---');
    
    const header = new HeaderComponent() as any;
    console.log('Header selector:', header.selector);
    console.log('Header template:', header.template);
    
    console.log('\nВалидация возраста:');
    const validator = new AgeValidator();
    try {
        validator.setAge(25);  // ✅ OK
        // validator.setAge(150); // ❌ Ошибка
    } catch (e: any) {
        console.log('Ошибка:', e.message);
    }
    
    console.log('\nУведомление с задержкой:');
    const notifier = new NotificationService();
    await notifier.sendNotification("Привет, мир!");
}

