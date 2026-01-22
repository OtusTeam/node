// ============================================
// 3. РАСШИРЕНИЕ (Extending)
// ============================================

// INTERFACE - использует extends
interface IPerson {
    name: string;
}

interface IEmployee extends IPerson {
    employeeId: number;
    department: string;
}

export const employee: IEmployee = {
    name: "Алексей",
    employeeId: 1001,
    department: "IT"
};

// TYPE - использует & (intersection)
type Person = {
    name: string;
};

type Employee = Person & {
    employeeId: number;
    department: string;
};

export const employeeType: Employee = {
    name: "Мария",
    employeeId: 1002,
    department: "HR"
};

// INTERFACE - можно расширять несколько интерфейсов
interface ICanWalk {
    walk(): void;
}

interface ICanTalk {
    talk(): void;
}

interface IHuman extends ICanWalk, ICanTalk {
    name: string;
}

export const human: IHuman = {
    name: "Иван",
    walk() { console.log("Идёт"); },
    talk() { console.log("Говорит"); }
};

export function demoExtending(): void {
    console.log('3. РАСШИРЕНИЕ (Extending)');
    console.log('Employee (interface):', employee);
    console.log('Employee (type):', employeeType);
    console.log('✅ Interface: extends');
    console.log('✅ Type: & (intersection)\n');
}

