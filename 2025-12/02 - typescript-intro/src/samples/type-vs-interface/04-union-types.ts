// ============================================
// 4. UNION TYPES (Объединение типов)
// ============================================

// ✅ TYPE - может создавать union типы
type Status = "pending" | "approved" | "rejected";
type ID = string | number;
type Result = string | number | boolean;

export const status1: Status = "pending";
export const status2: Status = "approved";
export const id1: ID = "abc123";
export const id2: ID = 42;

// ❌ INTERFACE - не может напрямую создавать union типы
// interface IStatus = "pending" | "approved";  // Ошибка!

// TYPE - union типов объектов
type Cat = {
    type: "cat";
    meow(): void;
};

type Dog = {
    type: "dog";
    bark(): void;
};

type Pet = Cat | Dog;

export const cat: Pet = {
    type: "cat",
    meow() { console.log("Мяу!"); }
};

export const dog: Pet = {
    type: "dog",
    bark() { console.log("Гав!"); }
};

export function handlePet(pet: Pet): void {
    if (pet.type === "cat") {
        pet.meow();
    } else {
        pet.bark();
    }
}

export const result: Result = "hello";
export const result2: Result = 123;
export const result3: Result = true;

export function demoUnionTypes(): void {
    console.log('4. UNION TYPES');
    console.log('Status:', status1, status2);
    console.log('ID:', id1, id2);
    handlePet(cat);
    handlePet(dog);
    console.log('✅ Type: поддерживает union (|)');
    console.log('❌ Interface: не поддерживает union напрямую\n');
}

