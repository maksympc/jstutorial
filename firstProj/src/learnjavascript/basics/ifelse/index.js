/**
 * Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».
 * Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».
 * */

const userScriptName = prompt("Каково «официальное» название JavaScript?");
if (userScriptName === "ECMAScript") {
    alert('Верно!');
}
else {
    alert("Не знаете? «ECMAScript»!");
}

/**Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:
 1, если значение больше нуля,
 -1, если значение меньше нуля,
 0, если значение равно нулю.
 */
const userDigit = prompt("Введите число:");
if (userDigit > 0) {
    alert(1);
} else if (userDigit < 0) {
    alert(-1);
} else {
    alert(0);
}

/**Напишите код, который будет спрашивать логин (prompt).
 Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит что-то другое – «Я вас не знаю».
 Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».
 */

const userLogin = prompt("Кто пришел?");
if (userLogin == undefined) {
    alert("Вход отменен!");
} else if (userLogin === 'Админ') {
    const password = prompt("Введите пароль:");
    if (password == undefined) {
        alert("Вход отменен!");
    } else if (password === "Черный Властелин") {
        alert("Добро пожаловать!");
    } else {
        alert("Пароль неверен");
    }
}
else {
    alert("Я вас не знаю!");
}

/**
 Перепишите if с использованием оператора '?':
 if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}*/
const a = Math.random() * 4;
const b = Math.random() * 4;
const result = a + b < 4 ? 'Мало' : 'Много';


/**
 Перепишите if..else с использованием нескольких операторов '?'.
 Для читаемости – оформляйте код в несколько строк.

 var message;
 if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/

const message = (login == 'Вася') ? 'Привет' :
                (login == 'Директор') ? 'Здравстуйте' :
                (login == '') ? 'нет логина' : '';