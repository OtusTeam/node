// ============================================
// 4. ДЕКОРАТОР ПАРАМЕТРА (Parameter Decorator)
// ============================================

// Примечание: Декораторы параметров требуют reflect-metadata
// В этом примере показана концепция

export class OrderService {
    createOrder(orderId: string, quantity: number): string {
        return `Заказ ${orderId}, количество: ${quantity}`;
    }
}

export function demoParameterDecorator(): void {
    console.log('\n--- 4. Декораторы параметра ---');
    
    console.log('Примеры декораторов параметров:');
    console.log('- @logParameter - логирование параметров');
    console.log('- @required - обязательный параметр');
    console.log('- @validate - валидация параметра');
    
    const service = new OrderService();
    const result = service.createOrder("ORD-123", 5);
    console.log('\nРезультат:', result);
}

