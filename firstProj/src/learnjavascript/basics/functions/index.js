/**
 * Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
 * */
let x = prompt('Введите основание х:');
let n = prompt('Введите степень n:');

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

alert(pow(x, n));

/**Как в функции отличить отсутствующий аргумент от undefined?*/
function f(x) {
    if (arguments.length != 0)
        alert(1);
    else {
        alert(0);
    }
}

f(undefined); // 1
f(); // 0

/**Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:*/
function sum() {
    var result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
alert(sum());
alert(sum(1));
alert(sum(1, 2));
alert(sum(1, 2, 3));
alert(sum(1, 2, 3, 4));
