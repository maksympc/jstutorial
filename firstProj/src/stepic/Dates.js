/**
 * В этом задании в нашу функцию testDateTime передаются две строки вида "03 November 2017 04:17".
 Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.
 Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник".

 Sample Input 1:
 19 October 1909 10:27
 28 March 1909 00:59

 Sample Output 1:
 Вторник

 Sample Input 2:
 04 August 1909 00:24
 03 November 1909 06:54

 Sample Output 2:
 Среда
 * */

function testDateTime(a, b) {
    let firstDate = new Date(a);
    let secondDate = new Date(b);
    let day = firstDate > secondDate ? firstDate.getDay() : secondDate.getDay();
    switch (day) {
        case 0 :
            day = 'Воскресенье';
            break;
        case 1 :
            day = 'Понедельник';
            break;
        case 2 :
            day = 'Вторник';
            break;
        case 3 :
            day = 'Среда';
            break;
        case 4 :
            day = 'Четверг';
            break;
        case 5 :
            day = 'Пятница';
            break;
        case 6 :
            day = 'Суббота';
            break;
    }
    return day;
}



