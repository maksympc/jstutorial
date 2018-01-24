`use strict`;
{
    /**
     Промисифицировать setTimeout
     Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
     Пример использования:

     delay(1000)
     .then(() => alert("Hello!"))
     Такая функция полезна для использования в других промис-цепочках.

     Вот такой вызов:

     return new Promise((resolve, reject) => {
  setTimeout(() => {
    doSomeThing();
    resolve();
  }, ms)
});
     Станет возможным переписать так:

     return delay(ms).then(doSomething);
     * */
    function delay(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms);
        });
    }

    delay(1000)
        .then(() => alert("Hello!"));
}
{
    /**Загрузить массив последовательно
     Есть массив URL:
     Напишите код, который все URL из этого массива загружает – один за другим (последовательно),
     и сохраняет в результаты в массиве results, а потом выводит.

     Вариант с параллельной загрузкой выглядел бы так:
     Promise.all( urls.map(httpGet) )
     .then(alert);
     В этой задаче загрузку нужно реализовать последовательно.*/
    function httpGet(url) {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    let error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };

            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };

            xhr.send();
        });
    }

    let urls = [
        'user.json',
        'guest.json'
    ];

    results = [];
    /**
     Для последовательной загрузки нужно организовать промисы в цепочку, чтобы они выполнялись строго – один после другого.*/
    /**Начало цепочки вызовов*/
    let chain = Promise.resolve();
    urls.forEach((url) => {
        chain = chain.then(httpGet(url))
            .then((result) => results.push(result));
    });
}
