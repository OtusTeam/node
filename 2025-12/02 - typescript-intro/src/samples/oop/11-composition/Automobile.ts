import { Engine } from './Engine';
import { Wheels } from './Wheels';

export class Automobile {
    private engine: Engine;
    private wheels: Wheels;

    constructor(
        public model: string,
        horsePower: number,
        wheelSize: number
    ) {
        this.engine = new Engine(horsePower);
        this.wheels = new Wheels(wheelSize);
    }

    start(): void {
        console.log(`${this.model}: Запуск`);
        this.engine.start();
    }

    stop(): void {
        console.log(`${this.model}: Остановка`);
        this.engine.stop();
    }

    getSpecs(): string {
        return `${this.model}: ${this.engine.getInfo()}, ${this.wheels.getInfo()}`;
    }
}

