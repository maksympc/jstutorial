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


//----------------------------------------------------
//link:https://learn.javascript.ru/constructor-new
//----------------------------------------------------
/**
 Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
 Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
 Метод sum() возвращает сумму запомненных свойств.
 Метод mul() возвращает произведение запомненных свойств.
 Пример использования:
 * */
function Calculator() {
    this.read = function () {
        this.a = +prompt("a?");
        this.b = +prompt("b?");
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

var calculator = new Calculator();
//calculator.read();

alert("Сумма=" + calculator.sum());
alert("Произведение=" + calculator.mul());

/**
 Создать Accumulator при помощи конструктора
 Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
 Более формально, объект должен:
 Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
 Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
 Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.
 Ниже вы можете посмотреть работу кода:
 * */
function Accumulator(stringValue) {
    this.value = stringValue.valueOf();
    this.read = function () {
        this.value += +prompt('Введите число:');
    }
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет текущее значение

/**Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
 Эта задача состоит из двух частей, которые можно решать одна за другой.
 Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.
 Пример использования:
 var calc = new Calculator;
 alert( calc.calculate("3 + 7") ); // 10
 Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
 Например, добавим операции умножить *, поделить / и возвести в степень **:
 var powerCalc = new Calculator;
 powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
 powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
 powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});
 var result = powerCalc.calculate("2 ** 3");
 alert( result ); // 8
 Поддержка скобок и сложных математических выражений в этой задаче не требуется.
 Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
 Предусмотрите обработку ошибок. Какая она должна быть – решите сами.*/
function mCalculator() {

    this.operations = {
        '+': function (a, b) {
            return a + b;
        }, '-': function (a, b) {
            return a - b;
        }
    };

    this.calculate = function (expression) {
        var items = expression.split(' ');
        if (items[1] in this.operations) {
            return this.operations[items[1]](+items[0], +items[2]);
        }
    };

    this.addMethod = function (name, func) {
        this.operations[name] = func;
    }
}

var powerCalc = new mCalculator;
powerCalc.addMethod("*", function (a, b) {
    return a * b;
});
powerCalc.addMethod("/", function (a, b) {
    return a / b;
});
powerCalc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});
var result = powerCalc.calculate("2 ** 3");
alert(result);
var result = powerCalc.calculate("2 / 3");
alert(result);


//-----------------------------------------
//link: https://learn.javascript.ru/descriptors-getters-setters
//-----------------------------------------

function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
        firstName: {
            get: function () {
                return this.fullName.split(" ")[0];
            },
            set: function (firstName) {
                var temp = this.fullName.split(' ');
                temp.splice(0, 1, firstName);
                this.fullName = temp.join(' ');
            }
        },
        lastName: {
            get: function () {
                return this.fullName.split(" ")[1];
            },
            set: function (lastName) {
                var temp = this.fullName.split(' ');
                temp.splice(1, 1, lastName);
                this.fullName = temp.join(' ');
            }
        },
    });
}


var vasya = new User("Василий Попкин");

// чтение firstName/lastName
alert(vasya.firstName); // Василий
alert(vasya.lastName); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert(vasya.fullName); // Василий Сидоров