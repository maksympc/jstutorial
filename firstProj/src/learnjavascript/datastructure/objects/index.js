/**
 * Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.
 * Создайте пустой объект user.
 * Добавьте свойство name со значением Вася.
 * Добавьте свойство surname со значением Петров.
 * Поменяйте значение name на Сергей.
 * Удалите свойство name из объекта.
 * */
var user = {};

user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";

delete user.name;
alert(user.name + " " + user.surname);


/**
 * Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:
 // до вызова
 var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

 multiplyNumeric(menu);

 // после вызова
 menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
 * */

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
    for (key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
alert("menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title);

//------------------------------------------
// link:https://learn.javascript.ru/object-methods
//------------------------------------------

/**
 * Создайте объект calculator с тремя методами:

 read() запрашивает prompt два значения и сохраняет их как свойства объекта
 sum() возвращает сумму этих двух значений
 mul() возвращает произведение этих двух значений
 */

var calculator = {
    read: function () {
        this.a = +prompt("Введите первое значение:", '');
        this.b = +prompt("Введите второе значение:", '');
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/**
 Есть объект «лестница» ladder:
 Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:
 ladder.up();
 ladder.up();
 ladder.down();
 ladder.showStep(); // 1
 Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:
 ladder.up().up().down().up().down().showStep(); // 1
 * */

var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().up().down().showStep(); // 1
