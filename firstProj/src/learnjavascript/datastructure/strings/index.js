/**
 * Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
 * Функция должна быть нечувствительна к регистру:
 * */

function checkSpam(str) {
    var lowerStr = str.toLowerCase();

    return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );