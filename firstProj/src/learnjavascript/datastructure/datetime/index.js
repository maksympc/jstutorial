/**
 Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
 Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:
 */
function getSecondsToday() {
    var today = new Date();
    return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
}

alert("Сегодня прошло уже " + getSecondsToday() + " секунд!");

/**Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.*/
function getSecondsToTomorrow() {
    var today = new Date();
    return 60 * 60 * 24 - (today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds());
}

alert("До завтра осталось " + getSecondsToTomorrow() + " секунд!");

/**Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.*/
function createDate() {
    return new Date(2012, 1, 20, 3, 12);
}

alert(createDate());

/**
 Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
 Например, для 2 января 2015:*/
function getDateAgo(date, days) {
    var searchDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
    return searchDay.getDate();
}

alert("5 дней назад было такое число: " + getDateAgo(new Date, 5));

/**Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
 Параметры:
 year – 4-значный год, например 2012.
 month – месяц от 0 до 11.
 Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).*/
function getLastDayOfMonth(year, month) {
    var day = new Date(year, month);
    let count = 0;
    //best solution,get the previous day
    var date = new Date(year, month + 1, 0);
    ////my first solution
    //  while (true) {
    //      if (day.getMonth() != month)
    //          break;
    //      day.setDate(day.getDate() + 1);
    //      count++;
    //  }
    return count;
}

alert("Последний число месяца февраля 2012:" + getLastDayOfMonth(2012, 1));

/**
 Напишите функцию formatDate(date), которая форматирует дату date так:
 Если со времени date прошло менее секунды, то возвращает "только что".
 Иначе если со времени date прошло менее минуты, то "n сек. назад".
 Иначе если прошло меньше часа, то "m мин. назад".
 Иначе полная дата в формате "дд.мм.гг чч:мм".
 */
function formatDate(date) {
    var now = new Date;
    var timeDiff = now - date;
    if (timeDiff < 1000) {
        return "только что";
    } else if (timeDiff < 60 * 1000) {
        return Math.round(timeDiff / 1000) + " сек. назад";
    } else if (timeDiff < 60 * 60 * 1000) {
        return Math.round(timeDiff / (60 * 1000)) + " мин. назад";
    }

    var YY = date.getFullYear().toString().slice(2);
    var MM = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth();
    var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    return DD + '.' + MM + '.' + YY + ' ' + hh + ':' + mm;
}

alert(formatDate(new Date(new Date - 1))); // только что
alert(formatDate(new Date(new Date - 30 * 1000))); // 30 сек. назад
alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // 5 мин. назад
alert(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата в формате "дд.мм.гг чч:мм"