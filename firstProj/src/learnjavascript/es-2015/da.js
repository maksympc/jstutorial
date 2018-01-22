/**
 * Файл содержит примеры деструктуризации (destructuring assignment) в ES-2015
 * */
'use strict';
{
    let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

    alert(firstName); // Юлий
    alert(lastName);  // Цезарь
    alert(rest);      // Император,Рима (массив из 2х элементов)
}
{
    let defaultLastName = function () {
        return Date.now() + '-visitor';
    };

// lastName получит значение, соответствующее текущей дате:
    let [firstName, lastName = defaultLastName()] = ["Вася"];

    alert(firstName); // Вася
    alert(lastName);  // 1436...-visitor
}
{
    let options = {
        title: "Меню"
    };


    let {width: w = 100, height: h = 200, title} = options;

    alert(title);  // Меню
    alert(w);      // 100
    alert(h);      // 200
}

{
    let options = {
        size: {
            width: 100,
            height: 200
        },
        items: ["Пончик", "Пирожное"]
    };


    let {title = "Меню", size: {width, height}, items: [item1, item2]} = options;

// Меню 100 200 Пончик Пирожное
    alert(title);  // Меню
    alert(width);  // 100
    alert(height); // 200
    alert(item1);  // Пончик
    alert(item2);  // Пирожное
}