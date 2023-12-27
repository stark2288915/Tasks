/*
- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

const arr = ['hello', 'rg', 'wegw', true, 3, 5, false, 'wg', 'wgg', true];

console.log(arr);

/*
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/

let boock1 = {
    title: "Harry Potter",
    pageCount: 345,
    genre: "fant"
}
let boock2 = {
    title: "mirror",
    pageCount: 345,
    genre: "fant"
}
let boock3 = {
    title: "lord of the ring",
    pageCount: 345,
    genre: "fant"
}
/*
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
    Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/

let boock4 = {
    title: "Harry Potter",
    pageCount: 345,
    genre: "fant",
    authors: [{name: "wegg", age: 45}, {name: "wrgerg", age: 43}, {name: "wrgerg", age: 42}]
}
let boock5 = {
    title: "mirror",
    pageCount: 345,
    genre: "fant",
    authors: [{ name: "wegg", age: 45}, {name: "wrgerg", age: 43}, {name: "wrgerg", age: 42}]
}
let boock6 = {
    title: "lord of the ring",
    pageCount: 345,
    genre: "fant",
    authors: [{name: "wegg",age: 45}, {name: "wrgerg", age: 43}, {name: "wrgerg", age: 42}]
}

/*
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. ' +
'Вивести в консоль пароль кожного користувача*/

let arrUsers = [
    {name: "sergey", username: "stark", password: "samsung085214"},
    {name: "sergey", username: "stark", password: "samsung085214"},
    {name: "sergey", username: "stark", password: "samsung085214"},
    {name: "sergey", username: "stark", password: "samsung085214"},
    {name: "sergey", username: "stark", password: "samsung085214"},
    {name: "sergey", username: "stark", password: "samsung085214"},
    {name: "sergey", username: "stark", password: "samsung085214"},
    {name: "sergey", username: "stark", password: "samsung085214"},
    {name: "sergey", username: "stark", password: "samsung085214"},
    {name: "sergey", username: "stark", password: "samsung085214"}
]
/*Логічні розгалуження:
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x = 45;

if( x !== 0){
    console.log("Вірно")
}else{
    console.log("Невірно")
}

/*
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = 56;

if(time <= 15){
    console.log("перша чтверть від 59")
}else if(time <= 30){
    console.log("друга чтверть від 59")
}else if(time <= 45){
    console.log("третя чтверть від 59")
}else{
    console.log("четверта чтверть від 59")
}

/*
- У змінній day дано якесь число від 1 до 31.
Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/


let day = 23;

/*
- Скласти розклад на тиждень за домопоги switch.
    Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/



switch (day) {
    case 1:{
        console.log("first day");
        break;
    }
    case 2:
        console.log("second day");
        break;

    case 3:
        console.log("third day");
        break;

    case 4:
        console.log("fourth day");
        break;

    case 5:
        console.log("fifth day");
        break;

    case 6:
        console.log("sixth day");
        break;

    case 7:
        console.log("seventh day");
        break;

    default:
        console.log("another day");
}

let numA = prompt("перше число");
let numB = prompt("друге число");

if(numA > numB){
    console.log(numA);
}else if(numA < numB){
    console.log(numB);
}else{
    console.log("рівні");
}

/*
- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)*/

let y = prompt("змінна x") || "default";
console.log(y);

/*
- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
    У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"
*/

