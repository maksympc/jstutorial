/**
 * link: https://learn.javascript.ru/internal-external-interface
 * */
/**
 * Улучшите готовый код кофеварки, который дан ниже: добавьте в кофеварку публичный метод stop(),
 * который будет останавливать кипячение (через clearTimeout).
 * */

function CoffeeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;
    var timerId;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert('Кофе готово!');
    }

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function () {
        if (timerId) {
            clearTimeout(timerId);
        }
    }
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет

/*
 * link: https://learn.javascript.ru/getters-setters
 */
/**
 * Напишите конструктор User для создания объектов:
 С приватными свойствами имя firstName и фамилия surname.
 С сеттерами для этих свойств.
 С геттером getFullName(), который возвращает полное имя.
 * */
function User() {

    var firstName = "";
    var surName = "";

    this.setFirstName = function (str) {
        firstName = str;
    };

    this.getFirstName = function (str) {
        return firstName;
    };

    this.setSurname = function (str) {
        surName = str;
    };

    this.getSurname = function (str) {
        return surName;
    };

    this.getFullName = function () {
        return this.getFirstName() + " " + this.getSurname();
    }.bind(this);
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert(user.getFullName()); // Петя Иванов


/**
 * Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.
 */
function CoffeeMachine(power, capacity) {
    var power = power;
    var waterAmount;
    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };

    this.getPower = function () {
        return power;
    }
}

/**
 * Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.
 * При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.
 * */
function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function () {
        setTimeout(onReady, getTimeToBoil());
    };

    this.addWater = function (amount) {
        this.setWaterAmount(amount + waterAmount);
    }
}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();

/**
 Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.
 Сейчас при готовности срабатывает функция onReady, но она жёстко задана в коде:
 Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady, вот так:
 P.S. Значение onReady по умолчанию должно быть таким же, как и раньше.
 P.P.S. Постарайтесь сделать так, чтобы setOnReady можно было вызвать не только до, но и после запуска кофеварки,
 то есть чтобы функцию onReady можно было изменить в любой момент до её срабатывания.

 Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.
 Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true, если она запущена и false, если нет.
 * */
function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var timerId = null;

    var onReady = function () {
        alert('Кофе готов!');
    };

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };

    this.getWaterAmount = function (amount) {
        return waterAmount;
    };


    this.run = function () {
        timerId = setTimeout(function () {
            // Чтобы setOnReady можно было вызывать в любое время, в setTimeout передаётся не onReady,
            // а анонимная функция function() { onReady() }, которая возьмёт текущий (установленный последним) onReady из замыкания
            timerId = null;
            onReady();
        }, getTimeToBoil());
    };

    this.setOnReady = function (func) {
        onReady = func;
    };

    this.isRunning = function () {
        return !!timerId;
    }
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function () {
    var amount = coffeeMachine.getWaterAmount();
    alert('Готов кофе: ' + amount + 'мл'); // Кофе готов: 150 мл
});

coffeeMachine.run();

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert('До: ' + coffeeMachine.isRunning()); // До: false

coffeeMachine.run();
alert('В процессе: ' + coffeeMachine.isRunning()); // В процессе: true

coffeeMachine.setOnReady(function () {
    alert("После: " + coffeeMachine.isRunning()); // После: false
});