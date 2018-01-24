/**
 * Итерируемые или, иными словами, «перебираемые» объекты – это те, содержимое которых можно перебрать в цикле.
 * Для перебора таких объектов добавлен новый синтаксис цикла: for..of.
 * */
'use strict';
{
    let arr = [1, 2, 3]; // массив — пример итерируемого объекта
    for (let value of arr) {
        alert(value); // 1, затем 2, затем 3
    }
}
/**Свой итератор*/
{
    let range = {
        from: 1,
        to: 5
    };
    /**Для возможности использовать объект в for..of нужно создать в нём свойство с названием Symbol.iterator (системный символ).
     * По стандарту у такого объекта должен быть метод next(), который при каждом вызове возвращает очередное значение и проверяет, окончен ли перебор.*/

    range[Symbol.iterator] = function () {
        let current = this.from;
        let last = this.to;

        // метод должен вернуть объект с методом next()
        return {
            next() {
                if (current <= last) {
                    return {
                        done: false,
                        value: current++
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        }
    };

    for (let num of range) {
        alert(num); // 1, затем 2, 3, 4, 5
    }

}