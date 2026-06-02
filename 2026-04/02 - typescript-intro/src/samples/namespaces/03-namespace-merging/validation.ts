// ============================================
// 3. СЛИЯНИЕ NAMESPACES (Namespace Merging)
// ============================================

// Первое определение namespace
namespace Validation {
  export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  export function validatePhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s-()]+$/;
    return phoneRegex.test(phone);
  }
}

// Второе определение того же namespace - они сольются!
namespace Validation {
  export function validatePassword(password: string): boolean {
    // Минимум 8 символов, хотя бы одна цифра и буква
    return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
  }

  export function validateURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}

// Третье определение - добавляем интерфейсы
namespace Validation {
  export interface ValidationResult {
    isValid: boolean;
    message?: string;
  }

  export function validate(
    value: string,
    type: "email" | "phone" | "password" | "url"
  ): ValidationResult {
    let isValid = false;
    let message = "";

    switch (type) {
      case "email":
        isValid = validateEmail(value);
        message = isValid ? "Email корректный" : "Некорректный email";
        break;
      case "phone":
        isValid = validatePhone(value);
        message = isValid ? "Телефон корректный" : "Некорректный телефон";
        break;
      case "password":
        isValid = validatePassword(value);
        message = isValid
          ? "Пароль корректный"
          : "Пароль должен быть минимум 8 символов с буквами и цифрами";
        break;
      case "url":
        isValid = validateURL(value);
        message = isValid ? "URL корректный" : "Некорректный URL";
        break;
    }

    return { isValid, message };
  }
}

// Использование объединённого namespace
console.log("\n--- 3. Слияние namespaces ---");

console.log("Email:", Validation.validateEmail("user@example.com"));
console.log("Phone:", Validation.validatePhone("+1-234-567-8900"));
console.log("Password:", Validation.validatePassword("SecurePass123"));
console.log("URL:", Validation.validateURL("https://example.com"));

const result1 = Validation.validate("user@example.com", "email");
console.log("Валидация email:", result1);

const result2 = Validation.validate("weak", "password");
console.log("Валидация пароля:", result2);

