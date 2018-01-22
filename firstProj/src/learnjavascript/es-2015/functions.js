/**Функции в ES-2015*/
'use strict'

// параметры по-умолчанию
function sayHi(who = getCurrentUser().toUpperCase()) {
    alert('Привет, ' + who);
}

function getCurrentUser() {
    return 'Вася';
}

sayHi(); // Привет, ВАСЯ

// спред оператор, агурменты в виде массива
function showName(firstName, lastName, ...rest) {
    alert(firstName + ' ' + lastName + ' - ' + rest);
}

// выведет: Юлий Цезарь - Император,Рима
showName("Юлий", "Цезарь", "Император", "Рима");

// функции-стрелки
let group = {
    title: "Наш курс",
    students: ["Вася", "Петя", "Даша"],

    showList: function () {
        this.students.forEach(
            student => alert(this.title + ': ' + student)
        )
    }
};

group.showList();

// функции-стрелки не имеют своих this и arguments
function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    }
}

function sayHi(who) {
    alert('Привет, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("Вася"); // Привет, Вася через 2 секунды