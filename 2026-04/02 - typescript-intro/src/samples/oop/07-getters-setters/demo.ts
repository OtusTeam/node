import { Temperature } from './Temperature';

export function demoGettersSetters(): void {
    console.log('7. ГЕТТЕРЫ И СЕТТЕРЫ');
    
    const temp = new Temperature(25);
    console.log(`Температура: ${temp.celsius}°C = ${temp.fahrenheit.toFixed(1)}°F`);

    temp.celsius = 30;
    console.log(`Новая температура: ${temp.celsius}°C = ${temp.fahrenheit.toFixed(1)}°F`);

    temp.fahrenheit = 86;
    console.log(`Через Фаренгейт: ${temp.celsius.toFixed(1)}°C = ${temp.fahrenheit}°F`);
    console.log('');
}

