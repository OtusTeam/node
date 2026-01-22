// ============================================
// 6. ИНТЕРФЕЙСЫ (Interfaces)
// ============================================

export interface IVehicle {
    brand: string;
    speed: number;
    start(): void;
    stop(): void;
}

