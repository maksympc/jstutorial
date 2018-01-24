'use strict';

/**
 * Вычисляемые свойства
 * */
{
    let a = "Мой ";
    let b = "Зелёный ";
    let c = "Крокодил";

    let user = {
        [(a + b + c).toLowerCase()]: "Гена"
    };

    alert(user["мой зелёный крокодил"]); // Гена
}

/**
 * Функция Object.assign получает список объектов и копирует в первый target свойства из остальных.
 * */
{
    let user = {name: "Вася"};
    let visitor = {isAdmin: false, visits: true};
    let admin = {isAdmin: true};

    Object.assign(user, visitor, admin);

// user <- visitor <- admin
    alert(JSON.stringify(user)); // name: Вася, visits: true, isAdmin: true
}
/**Object.is(value1, value2) Новая функция для проверки равенства значений.*/
{
    alert(Object.is(+0, -0)); // false
    alert(+0 === -0);        // true

// Сравнение с NaN
    alert(Object.is(NaN, NaN)); // true
    alert(NaN === NaN);         // false
}
/**Методы объекта*/
{
    let name = "Вася", surname = "Петров";
    let user = {
        name,
        surname,
        get fullName() {
            return `${name} ${surname}`;
        }
    };

    alert(user.fullName); // Вася Петров

}
/**
 В ES-2015 появилось новое ключевое слово super. Оно предназначено только для использования в методах объекта.
 Вызов super.parentProperty позволяет из метода объекта получить свойство его прототипа.
 * */
{
    let animal = {
        walk() {
            alert("I'm walking");
        }
    };

    let rabbit = {
        __proto__: animal,
        walk() {
            alert(super.walk); // walk() { … }
            super.walk(); // I'm walking
        }
    };

    rabbit.walk();
}