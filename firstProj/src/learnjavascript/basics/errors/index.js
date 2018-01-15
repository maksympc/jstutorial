/*
link: https://learn.javascript.ru/oop-errors
 */
/**
 Создайте ошибку FormatError, которая будет наследовать от встроенного класса SyntaxError.
 Синтаксис для её создания – такой же, как обычно:

 var err = new FormatError("ошибка форматирования");
 alert( err.message ); // ошибка форматирования
 alert( err.name ); // FormatError
 alert( err.stack ); // стек на момент генерации ошибки

 alert( err instanceof SyntaxError ); // true
 * */

function FormatError(message) {
    SyntaxError.apply(this, arguments);

    this.message = message || "ошибка форматирования";
    this.name = "FormatError";

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = (new Error()).stack;
    }
}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // стек на момент генерации ошибки

alert( err instanceof SyntaxError ); // true