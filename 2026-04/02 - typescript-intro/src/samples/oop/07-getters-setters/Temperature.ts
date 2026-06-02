// ============================================
// 7. ГЕТТЕРЫ И СЕТТЕРЫ (Getters and Setters)
// ============================================

export class Temperature {
    private _celsius: number;

    constructor(celsius: number) {
        this._celsius = celsius;
    }

    // Getter
    get celsius(): number {
        return this._celsius;
    }

    // Setter
    set celsius(value: number) {
        if (value < -273.15) {
            console.log('Температура не может быть ниже абсолютного нуля');
            return;
        }
        this._celsius = value;
    }

    get fahrenheit(): number {
        return this._celsius * 9/5 + 32;
    }

    set fahrenheit(value: number) {
        this._celsius = (value - 32) * 5/9;
    }
}

