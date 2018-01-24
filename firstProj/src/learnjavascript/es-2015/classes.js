/**В современном JavaScript появился новый, «более красивый» синтаксис для классов.*/
'use strict';
{
    class User {
        constructor(name) {
            this.name = name;
        }

        sayHi() {
            alert(this.name);
        }
    }

    let user = new User("Вася");
    user.sayHi(); // Вася
}
/**Также, как и Function Expression, классы можно задавать «инлайн», в любом выражении и внутри вызова функции.*/
{
    let allModels = {};

    function createModel(Model, ...args) {
        let model = new Model(...args);
        model._id = Math.random().toString(36).slice(2);
        allModels[model._id] = model;
        return model;
    }

    let user = createModel(
        class User {
            constructor(name) {
                this.name = name;
            }

            sayHi() {
                alert(this.name);
            }
        }, "Вася");

    user.sayHi(); // Вася

    alert(allModels[user._id].name); // Вася
}
/**Геттеры, сеттеры и вычисляемые свойства*/
{
    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        // геттер
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }

        // сеттер
        set fullName(newValue) {
            [this.firstName, this.lastName] = newValue.split(' ');
        }

        // вычисляемое название метода
        ["test".toUpperCase()]() {
            alert("PASSED!");
        }

    };

    let user = new User("Вася", "Пупков");
    alert(user.fullName); // Вася Пупков
    user.fullName = "Иван Петров";
    alert(user.fullName); // Иван Петров
    user.TEST(); // PASSED!
}
/**Наследование*/
{
    class Animal {
        constructor(name) {
            this.name = name;
        }

        walk() {
            alert("I walk: " + this.name);
        }
    }

    class Rabbit extends Animal {
        walk() {
            super.walk();
            alert("...and jump!");
        }
    }

    new Rabbit("Вася").walk();
// I walk: Вася
// and jump!
}