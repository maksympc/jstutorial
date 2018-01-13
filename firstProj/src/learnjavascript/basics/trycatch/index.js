/*------------------------
link: https://learn.javascript.ru/exception
-------------------------*/

/**
 Напишите интерфейс, который принимает математическое выражение (в prompt) и результат его вычисления через eval.
 При ошибке нужно выводить сообщение и просить переввести выражение.
 Ошибкой считается не только некорректное выражение, такое как 2+, но и выражение, возвращающее NaN, например 0/0.
 * */

function calc() {
    while (true) {
        try {
            var expression = prompt("Введите математическое выражение:", "");
            var result = eval(expression);
            if (isNaN(result)) {
                throw new Error("Результат неопределен!")
            }
            return result;
        } catch (e) {
            alert(e.message);
        }
    }
}

alert(calc());

