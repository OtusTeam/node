import { demoClassDecorator } from './01-class-decorator';
import { demoMethodDecorator } from './02-method-decorator';
import { demoPropertyDecorator } from './03-property-decorator';
import { demoParameterDecorator } from './04-parameter-decorator';
import { demoDecoratorFactory } from './05-decorator-factory';
import { demoMultipleDecorators } from './06-multiple-decorators';

export async function demoDecorators(): Promise<void> {
    console.log('17. ДЕКОРАТОРЫ (Decorators)');
    
    demoClassDecorator();
    demoMethodDecorator();
    demoPropertyDecorator();
    demoParameterDecorator();
    await demoDecoratorFactory();
    demoMultipleDecorators();
    
    console.log('');
}

