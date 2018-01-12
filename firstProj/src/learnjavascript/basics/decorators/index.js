/*--------------------------------
link: https://learn.javascript.ru/decorators
--------------------------------*/

/**
 * Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
 Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в f.
 В этой задаче можно считать, что у функции f ровно один аргумент.
 Работать должно так:*/

function work() {
    for (i = 0; i < arguments.length; i++) {
        alert(arguments[i]);
    }
}

function makeLogging(f, log) {
    return function () {
        log.concat([].slice.call(this, arguments));
        return f.apply(this, arguments);
    }
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    alert('Лог:' + args.join()); // "Лог:1,2", "Лог:4,5"
}

/**
 Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, которая кеширует её результаты.
 В этой задаче функция f имеет только один аргумент, и он является числом.
 При первом вызове обертки с определенным аргументом – она вызывает f и запоминает значение.
 При втором и последующих вызовах с тем же аргументом возвращается запомненное значение.
 * */

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    var cache = {};

    function wrapper(arg) {
        if (!(arg in cache)) {
            cache[arg] = f.call(this, arg);
        }
        return cache[arg];
    }

    return wrapper;
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert(a == b); // true (значение закешировано)

b = f(2);
alert(a == b); // false, другой аргумент => другое значение
