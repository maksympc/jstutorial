/**
 * Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

 sumTo(1) = 1
 sumTo(2) = 2 + 1 = 3
 sumTo(3) = 3 + 2 + 1 = 6
 sumTo(4) = 4 + 3 + 2 + 1 = 10
 ...
 sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

 * */

var n = 10;

function loopSum(n) {
    var sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

alert(loopSum(n));

function arithmeticProgression(n) {
    return sum = (2 + (n - 1)) * n / 2
}

alert(arithmeticProgression(n));

function recursionSum(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n + recursionSum(n - 1);
    }
}

alert(recursionSum(n));

/**
 * Задача – написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.
 */
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

alert(factorial(5));

/**
 * Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. Пример работы:
 alert( fib(3) ); // 2
 alert( fib(7) ); // 13
 alert( fib(77)); // 5527939700884757
 * */

function fib(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 1;
    }
    return fib(n - 1)+fib(n - 2);
}
alert(fib(5));

function fibLoop(n){
    let a1=1, a2=1;
    let fibonacci=1;
    for(let i=3;i<=n;i++){
        fibonacci = a1+a2;
        a1 = a2;
        a2 = fibonacci;
    }
    return fibonacci
}
alert(fibLoop(7));