/*-----------------
link: https://learn.javascript.ru/json
-------------------*/

/**
 Превратите объект leader из примера ниже в JSON:
 После этого прочитайте получившуюся строку обратно в объект.
 * */
var leader = {
    name: "Василий Иванович",
    age: 35
};
var str = JSON.stringify(leader);
alert(str);
var obj = JSON.parse(str);
alert(obj);