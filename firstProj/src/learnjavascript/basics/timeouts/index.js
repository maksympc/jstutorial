/*-----------------------
link: https://learn.javascript.ru/settimeout-setinterval
-------------------------*/

/**
 Напишите функцию printNumbersInterval(),которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100 мс.
 То есть, весь вывод должен занимать 2000 мс, в течение которых каждые 100 мс в консоли появляется очередное число.
 Нажмите на кнопку, открыв консоль, для демонстрации:

 printNumbersInterval()
 P.S. Функция должна использовать setInterval.
 * */
function printNumbersInterval() {
    var i = 1;
    var timerId = setInterval(function () {
        console.log(i++);
        if (i == 20) {
            clearInterval(timerId);
        }
    }, 100);
}

printNumbersInterval();

/**Сделайте то же самое, что в задаче Вывод чисел каждые 100 мс, но с использованием рекурсивного setTimeout вместо setInterval.*/
function printNumbersTimeout() {
    var i = 1;
    var timerId = setTimeout(function run() {
        console.log(i++);
        if (i < 21) {
            clearTimeout(timerId);
            setTimeout(run, 100);
        }
    }, 100);
}

printNumbersTimeout();

/**
 Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.
 * */
function f(x) {
    alert(x);
}

function delay(f, ms) {
    return function () {
        var savedThis = this;
        var savedArgs = arguments;
        setTimeout(function () {
            f.apply(this, savedArgs);
        }, ms);
    };

}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

/**
 Напишите функцию debounce(f, ms), которая возвращает обёртку, которая откладывает вызов f на ms миллисекунд.
 «Лишние» вызовы перезаписывают предыдущие отложенные задания. Все аргументы и контекст – передаются.
 * */

function f1() {
    alert(arguments[0]);
}

function debounce(f, ms) {
    var timer = null;
    return function (...args) {
        var task = function () {
            f.apply(this, args);
            timer = null;
        };
        if (timer) {
            clearTimeout(timer);
        } else {
            timer = setTimeout(task, ms);
        }
    };
}

let ff = debounce(f1, 1000);

ff(1); // вызов отложен на 1000 мс
ff(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызов f(1)

setTimeout(function () {
    ff(3)
}, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout(function () {
    ff(4)
}, 1200); // игнорируем вызов (3)


/**
 Напишите функцию throttle(f, ms) – «тормозилку», которая возвращает обёртку, передающую вызов f не чаще, чем раз в ms миллисекунд.
 * */
var fprint = function (a) {
    console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(fprint, 1000);
f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

function throttle(f, ms) {

    var savedThis = null;
    var savedArgs = null;
    var isWait = false;

    return function work() {
        if (isWait) {
            savedThis = this;
            savedArgs = arguments;
            return;
        }

        f.apply(this, arguments);
        isWait = true;

        setTimeout(function () {
            isWait = false;
            if (savedArgs) {
                work.apply(savedThis, savedArgs);
                savedThis = null;
                savedArgs = null;
            }
        }, ms);
    }
}