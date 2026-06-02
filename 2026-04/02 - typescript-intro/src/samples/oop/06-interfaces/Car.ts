import { IVehicle } from './IVehicle';

export class Car implements IVehicle {
    brand: string;
    speed: number;

    constructor(brand: string) {
        this.brand = brand;
        this.speed = 0;
    }

    start(): void {
        console.log(`${this.brand} запускается`);
        this.speed = 60;
    }

    stop(): void {
        console.log(`${this.brand} останавливается`);
        this.speed = 0;
    }
}

