import { IFullNameBuilder } from './IFullNameBuilder';

// Реализация интерфейса функции - простая версия
export const simpleBuilder: IFullNameBuilder = function (name: string, surname: string): string {
    return "Mr. " + name + " " + surname;
}

// Реализация интерфейса функции - с титулом
export const formalBuilder: IFullNameBuilder = (name: string, surname: string): string => {
    return `Господин ${surname} ${name}`;
}

// Реализация интерфейса функции - краткая версия
export const shortBuilder: IFullNameBuilder = (name, surname) => {
    return `${name} ${surname[0]}.`;
}

