/**В ES-2015 появились новые типы коллекций в JavaScript: Set, Map, WeakSet и WeakMap.*/
'use strict';
{
    let map = new Map();

    map.set('1', 'str1');   // ключ-строка
    map.set(1, 'num1');     // число
    map.set(true, 'bool1'); // булевое значение

// в обычном объекте это было бы одно и то же,
// map сохраняет тип ключа
    alert(map.get(1)); // 'num1'
    alert(map.get('1')); // 'str1'

    alert(map.size); // 3
}
/**Итерирование*/
{
    'use strict';

    let recipeMap = new Map([
        ['огурцов', '500 гр'],
        ['помидоров', '350 гр'],
        ['сметаны', '50 гр']
    ]);

// цикл по ключам
    for (let fruit of recipeMap.keys()) {
        alert(fruit); // огурцов, помидоров, сметаны
    }

// цикл по значениям [ключ,значение]
    for (let amount of recipeMap.values()) {
        alert(amount); // 500 гр, 350 гр, 50 гр
    }

// цикл по записям
    for (let entry of recipeMap) { // то же что и recipeMap.entries()
        alert(entry); // огурцов,500 гр , и т.д., массивы по 2 значения
    }
}
/**Set – коллекция для хранения множества значений, причём каждое значение может встречаться лишь один раз.*/
{
    let set = new Set();

    let vasya = {name: "Вася"};
    let petya = {name: "Петя"};
    let dasha = {name: "Даша"};

// посещения, некоторые пользователи заходят много раз
    set.add(vasya);
    set.add(petya);
    set.add(dasha);
    set.add(vasya);
    set.add(petya);

// set сохраняет только уникальные значения
    alert(set.size); // 3

    set.forEach(user => alert(user.name)); // Вася, Петя, Даша
}
/**
 * WeakSet – особый вид Set не препятствующий сборщику мусора удалять свои элементы. То же самое – WeakMap для Map.
 То есть, если некий объект присутствует только в WeakSet/WeakMap – он удаляется из памяти.*/
{
    // текущие активные пользователи
    let activeUsers = [
        {name: "Вася"},
        {name: "Петя"},
        {name: "Маша"}
    ];

// вспомогательная информация о них,
// которая напрямую не входит в объект юзера,
// и потому хранится отдельно
    let weakMap = new WeakMap();
    weakMap.set(activeUsers[0], 1);
    weakMap.set(activeUsers[1], 2);
    weakMap.set(activeUsers[2], 3);
    weakMap.set('Katya', 4); //Будет ошибка TypeError: "Katya" is not a non-null object
    alert(weakMap.get(activeUsers[0])); // 1
    activeUsers.splice(0, 1); // Вася более не активный пользователь
// weakMap теперь содержит только 2 элемента
    activeUsers.splice(0, 1); // Петя более не активный пользователь
// weakMap теперь содержит только 1 элемент
}