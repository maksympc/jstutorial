/**В этом задании в нашу функцию testArray передаются два массива случайной длины заполненные случайными числами.
 * Вам нужно сосчитать сумму всех элементов обоих массивов и возвратить ее из функции.
 Sample Input:
 [8, 1, 1, 7, 4, 0]  [5, 8, 5, 4, 8]
 Sample Output:
 51
 */
function testArray(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++)
        sum += a[i];
    for (let i = 0; i < b.length; i++)
        sum += b[i];
    return sum;
}


/**
 * В этом задании в нашу функцию testArray передаются две строки случайной длины и содержания.
 * Вам нужно составить из символов этих строк один массив (каждый символ строки становится отдельным элементом массива),
 * затем добавить первым элементом  массива текстовое значение "Иванов", и вернуть из функции все элементы в обратном порядке, преобразовав в строку.
 * Обратите внимание, что в обратном порядке нужно переставить элементы внутри массива, а данные внутри элементов инвертировать не нужно!
 Sample Input:
 4326 297515
 Sample Output:
 5157926234Иванов*/
function testArray1(a, b) {
    let result;
    result = (a+b).split('');
    result.unshift('Иванов');
    return result.reverse().join('');
}

alert(testArray("4326", "297515"));