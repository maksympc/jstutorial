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