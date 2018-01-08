/**Напишите код, который:

 Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
 Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
 При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
 Выводит сумму всех значений массива
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function getUserInput() {
    var userInput = [];

    while (true) {
        let inputValue = prompt("Введите число:");

        if (!isNumeric(inputValue)) {
            break;
        }

        userInput.push(inputValue);
    }
    return userInput;
}

function calcSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += +array[i];
    }
    return sum;
}

alert(calcSum(getUserInput()));


/**
 * В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
 *
 var obj = {
  className: 'open menu'
}
 Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
 * */

var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (i = 0; i < classes.length; i++) {
        if (classes[i] === cls)
            return;
    }

    classes.push(cls);
    obj.className = classes.join(' ');
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert(obj.className); // "open menu new me"


/**
 Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
 То есть, дефисы удаляются, а все слова после них получают заглавную букву.*/

function camelize(str) {
    var resultStr = str.split('-');

    for (i = 1; i < resultStr.length; i++) {
        resultStr[i] = resultStr[i].charAt(0).toUpperCase() + resultStr[i].slice(1);
    }

    return resultStr.join('');
}

alert(camelize("background-color")); // backgroundColor
alert(camelize("list-style-image")); // listStyleImage
alert(camelize("-webkit-transition")); // WebkitTransition

/**
 У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
 var obj = {
  className: 'open menu'
};
 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
 removeClass(obj, 'open'); // obj.className='menu'
 removeClass(obj, 'blabla'); // без изменений (нет такого класса)
 */
var obj1 = {
    className: 'open my menu menu'
};

function removeClass(obj, cls) {
    var classes = obj.className.split(' ');

    for (i = 0; i < classes.length; i++) {
        if (classes[i] === cls)
            classes.splice(i--, 1);
    }

    obj.className = classes.join(' ');
}

removeClass(obj1, 'menu');
removeClass(obj1, 'open'); // obj.className='menu'
removeClass(obj1, 'blabla'); // без изменений (нет такого класса)
alert(obj1.className); // 'my'

/**
 * Односвязный список.
 Например, объект ниже задаёт односвязный список, в next хранится ссылка на следующий элемент:
 var list = {...};
 Задачи:
 Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
 Напишите функцию printList(list) при помощи рекурсии.
 Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
 Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
 * */

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) { //1
    var next = list;
    while (next) {
        alert(next.value);
        next = next.next;
    }
}

printList(list);

function printRecList(list) { //2
    if (list) {
        alert(list.value);
        printRecList(list.next)
    }
}

printRecList(list);

function printRecReverseList(list) {
    if (list.next) {
        printRecReverseList(list.next)
    }
    alert(list.value);
}

printRecReverseList(list); // 3

function printReverseList(list) {
    var count = 0;
    var next = list;
    while (next) {
        count++;
        next = next.next;
    }
    for (let i = 0; i < count; i++) {
        next = list;
        for (j = count - 1; j > i; j--) {
            next = next.next;
        }
        alert(next.value);
    }
}

printReverseList(list); // 4

/**
 * Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
 * Исходный массив не должен меняться.
 * */

var arr = ["HTML", "JavaScript", "CSS"];
arrSorted = arr.concat().sort();
alert(arrSorted);
alert(arr);

/**
 Пусть arr – массив строк.
 Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
 Например:
 * */
function unique(arr){
    var obj = {};
    for(i = 0; i < arr.length; i++){
        obj[arr[i]] = arr[i];
    }
    return Object.keys(obj);
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()

