// ============================================
// 3. СЛИЯНИЕ NAMESPACES (Namespace Merging)
// ============================================
// Первое определение namespace
var Validation;
(function (Validation) {
    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    Validation.validateEmail = validateEmail;
    function validatePhone(phone) {
        var phoneRegex = /^\+?[\d\s-()]+$/;
        return phoneRegex.test(phone);
    }
    Validation.validatePhone = validatePhone;
})(Validation || (Validation = {}));
// Второе определение того же namespace - они сольются!
(function (Validation) {
    function validatePassword(password) {
        // Минимум 8 символов, хотя бы одна цифра и буква
        return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
    }
    Validation.validatePassword = validatePassword;
    function validateURL(url) {
        try {
            new URL(url);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    Validation.validateURL = validateURL;
})(Validation || (Validation = {}));
// Третье определение - добавляем интерфейсы
(function (Validation) {
    function validate(value, type) {
        var isValid = false;
        var message = "";
        switch (type) {
            case "email":
                isValid = Validation.validateEmail(value);
                message = isValid ? "Email корректный" : "Некорректный email";
                break;
            case "phone":
                isValid = Validation.validatePhone(value);
                message = isValid ? "Телефон корректный" : "Некорректный телефон";
                break;
            case "password":
                isValid = Validation.validatePassword(value);
                message = isValid
                    ? "Пароль корректный"
                    : "Пароль должен быть минимум 8 символов с буквами и цифрами";
                break;
            case "url":
                isValid = Validation.validateURL(value);
                message = isValid ? "URL корректный" : "Некорректный URL";
                break;
        }
        return { isValid: isValid, message: message };
    }
    Validation.validate = validate;
})(Validation || (Validation = {}));
// Использование объединённого namespace
console.log("\n--- 3. Слияние namespaces ---");
console.log("Email:", Validation.validateEmail("user@example.com"));
console.log("Phone:", Validation.validatePhone("+1-234-567-8900"));
console.log("Password:", Validation.validatePassword("SecurePass123"));
console.log("URL:", Validation.validateURL("https://example.com"));
var result1 = Validation.validate("user@example.com", "email");
console.log("Валидация email:", result1);
var result2 = Validation.validate("weak", "password");
console.log("Валидация пароля:", result2);
