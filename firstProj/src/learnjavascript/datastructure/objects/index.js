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

