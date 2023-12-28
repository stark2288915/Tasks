/*- створити блок,
    - додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.*/

let div = document.createElement("div");
div.innerText = "lancer 9";
document.body.appendChild(div);

div.classList.add( "wrap", "collapse", "alpha", "beta");


div.style.background = "silver";
div.style.color = "green";
div.style.size = "15px";

/*
- Є масив:
    ['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
*/

let arr1 = ['Main','Products','About us','Contacts'];

const ul = document.createElement("ul");

document.body.appendChild(ul);

for (const element of arr1) {
    const li = document.createElement("li");
    ul.append(li);
    li.innerText = element;
}

/*- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const coursesArr = document.createElement('div');

document.body.appendChild(coursesArr);

for (const coursElement of coursesAndDurationArray1) {
    const coursDiv = document.createElement('div');
    document.body.appendChild(coursDiv);

    for (const key in coursElement) {
        console.log(`${key}: ${coursElement[key]}`)
        const li = document.createElement('li');
        coursDiv.append(li);
        li.innerText = `${key}: ${coursElement[key]}`;
    }

    const br = document.createElement('br');
    coursDiv.append(br);

}

/*
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.
*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];




for (const element of coursesAndDurationArray) {
    const coursDiv1 = document.createElement('div');
    document.body.appendChild(coursDiv1);

    for (const key in element) {

        if(key === 'title'){
            const h1 = document.createElement('h1');
            coursDiv1.append(h1);
            h1.classList.add('heading');
            h1.innerText = `${key}: ${element[key]}`
        }else if (key === 'monthDuration'){
            const p = document.createElement('p');
            coursDiv1.append(p);
            p.classList.add('description');
            p.innerText = `${key}: ${element[key]}`
        }

        const br = document.createElement('br');
        coursDiv1.append(br);

    }

}


/*- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
    Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту*/


