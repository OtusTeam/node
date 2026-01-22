// ============================================
// 2. DECLARATION MERGING (Объединение объявлений)
// ============================================

// ✅ INTERFACE - можно объявлять несколько раз (объединяются)
interface IAnimal {
    name: string;
}

interface IAnimal {
    age: number;
}

interface IAnimal {
    sound: string;
}

// Все три объявления объединяются в одно!
export const animal: IAnimal = {
    name: "Кот",
    age: 3,
    sound: "Мяу"
};

// ❌ TYPE - нельзя объявлять дважды
type Animal = {
    name: string;
};

// type Animal = {  // ❌ Ошибка! Duplicate identifier
//     age: number;
// };

export const animalType: Animal = {
    name: "Кот"
};

export function demoDeclarationMerging(): void {
    console.log('2. DECLARATION MERGING');
    console.log('Animal (interface):', animal);
    console.log('✅ Interface: можно объявлять несколько раз');
    console.log('❌ Type: нельзя переопределять\n');
}

