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

/**
 Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
 Да, именно так, через двойные скобки (это не опечатка). Например:
 sum(1)(2) = 3
 sum(5)(-1) = 4
 */
function sum(a) {
    return function (b) {
        return a + b;
    }
}

alert(sum(1)(2));

/**
 Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

 Создание объекта: var buffer = makeBuffer();.
 Вызов makeBuffer должен возвращать такую функцию buffer,
 которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище,
 а при вызове без аргументов buffer() – возвращает его.
 Вот пример работы:

 function makeBuffer() {}
 var buffer = makeBuffer();
 // добавить значения к буферу
 buffer('Замыкания');
 buffer(' Использовать');
 buffer(' Нужно!');
 // получить текущее значение
 alert( buffer() ); // Замыкания Использовать Нужно!
 Буфер должен преобразовывать все данные к строковому типу:
 var buffer = makeBuffer();
 buffer(0);
 buffer(1);
 buffer(0);
 alert( buffer() ); // '010'
 Решение не должно использовать глобальные переменные.

 Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(),
 который будет очищать текущее содержимое буфера:
 * */
function makeBuffer() {
    var container = [];

    function buffer(a) {
        if (a) {
            container.push(a)
        } else {
            return container.join(' ');
        }
    }

    buffer.clear = function () {
        container = [];
    };

    return buffer;
}

var buffer = makeBuffer();
buffer("Тест");
buffer(" тебя не съест ");
alert(buffer()); // Тест тебя не съест
buffer.clear();
alert(buffer()); // ""


//----------------------------------------------------------------
// ссылка на материалы: https://learn.javascript.ru/closures-usage
//----------------------------------------------------------------
/**У нас есть массив объектов:
 var users = [{...}];
 Обычно сортировка по нужному полю происходит так:
 // по полю name (Вася, Маша, Петя)
 users.sort(function(a, b) {
  return a.name > b.name ? 1 : -1;
});
 // по полю age  (Маша, Вася, Петя)
 users.sort(function(a, b) {
  return a.age > b.age ? 1 : -1;
});
 Мы хотели бы упростить синтаксис до одной строки, вот так:
 users.sort(byField('name'));
 users.forEach(function(user) {
  alert( user.name );
}); // Вася, Маша, Петя
 users.sort(byField('age'));
 users.forEach(function(user) {
  alert( user.name );
}); // Маша, Вася, Петя
 То есть, вместо того, чтобы каждый раз писать в sort function... – будем использовать byField(...)
 Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field,
 чтобы пример выше заработал.*/

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(fieldName) {
    return function (a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1;
    }
}

users.sort(byField('surname'));
users.forEach(function (item, index, arr) {
    alert("index:" + index + "user.name:" + item.name);
});

/**
 Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
 Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:

 filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
 filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.

 Пример, как это должно работать:
 // .. ваш код для filter, inBetween, inArray
 var arr = [1, 2, 3, 4, 5, 6, 7];
 alert(filter(arr, function(a) {
    return a % 2 == 0
})); // 2,4,6
 alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
 alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
 */

function filter(arr, func) {
    var resultArr = [];
    arr.forEach(function f(item) {
        if (func(item))
            resultArr.push(item);
    });
    return resultArr;
}

function inBetween(low, high) {
    return function (item) {
        return low <= item && item <= high;
    }
}

function inArray(array) {
    return function (item) {
        return array.indexOf(item) != -1;
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7];
alert(filter(arr, function (a) {
    return a % 2 == 0
})); // 2,4,6
alert(filter(arr, inBetween(3, 6))); // 3,4,5,6
alert(filter(arr, inArray([1, 2, 10]))); // 1,2

/**
 * Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:
 function makeArmy() {
  var shooters = [];
  for (var i = 0; i < 10; i++) {
    var shooter = function() { // функция-стрелок
      alert( i ); // выводит свой номер
    };
    shooters.push(shooter);
  }
  return shooters;
}
 var army = makeArmy();
 army[0](); // стрелок выводит 10, а должен 0
 army[5](); // стрелок выводит 10...
 // .. все стрелки выводят 10 вместо 0,1,2...9
 Почему все стрелки́ выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано. Предложите несколько вариантов исправления.
 * */
function makeArmy() {
    var shooters = [];
    for (var i = 0; i < 10; i++) {
        var shooter = (function (i) { // функция-стрелок
            return function () {
                alert(i); // выводит свой номер
            }
        })(i);
        shooters.push(shooter);
    }
    return shooters;
}

var army = makeArmy();
army[0]();
army[5]();

/**
 * Напишите функцию sum, которая будет работать так:
 sum(0)(1)(2)(3)(4)(5) == 15
 Количество скобок может быть любым.
 * */

function sum1(a) {
    var sum = a;
    var f = function (b) {
        sum += b;
        return f;
    };
    f.toString = function () {
        return sum;
    };
    f.valueOf = function () {
        return sum;
    };
    return f;
}

alert(sum1(2)(3));

/*--------------------------------------
link:https://learn.javascript.ru/call-apply
--------------------------------------*/
/**
 *
 Создайте функцию sumArgs(), которая будет суммировать все свои аргументы:
 function sumArgs() {
 }
 alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
 Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
 P.S. Функция sum вам не понадобится, она приведена в качестве примера использования reduce для похожей задачи.
 */

function sumArgs(arr) {
    return [].reduce.call(arguments, function (acc, item) {
        return acc + item;
    })
}

alert(sumArgs(1, 2, 3)); // 6, аргументы переданы через запятую, без массива

/**
 Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
 Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.
 * */
function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}

function applyAll(func) {
    var args = [].splice.call(arguments, 1);
    return func.apply(null, args);
}

alert( applyAll(sum, 1, 2, 3) ); // 6
alert( applyAll(mul, 2, 3, 4) ); // 24
alert( applyAll(Math.max, 2, -2, 3) ); // 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2