/*
- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою:
*/

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let num1 = 1;
let num10 = 10;
let num999 = -999;
let num123 = 123;
let num314 = 3.14;
let num27 = 2.7;
let num16 = 16;
let boolt = true;
let boolf = false;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(num1);
console.log(num10);
console.log(num999);
console.log(num123);
console.log(num314);
console.log(num27);
console.log(num16);
console.log(boolt);
console.log(boolf);


/*
Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)*/

let firstName = "Цвєтков";
let middleName = "Сергій";
let lastName = "Сергійович";

console.log(`${firstName} ${middleName} ${lastName}`);

/*- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;*/


let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

/*Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
та вивести в консоль*/

let firstNameP = prompt("Прізвище");
let middleNameP = prompt("Ім'я");
let lastNameP = prompt("По батькові");

console.log(`${firstNameP} ${middleNameP} ${lastNameP}`);

