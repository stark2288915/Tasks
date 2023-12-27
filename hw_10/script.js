/*
Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом*/

const form1 = document.forms.form1;

form1.onsubmit = function (ev){
    ev.preventDefault();
    const div = document.createElement("div");
    const name = ev.target.name.value;
    const sname = form1.sname.value;
    const age = ev.target.age.value;
    div.innerHTML = `name: ${name} <br/> sname: ${sname} <br/> age: ${age} <hr/>`;
    form1.append(div);

    ev.target.name.value = "";
    form1.sname.value = "";
    ev.target.age.value = "";
}


/*є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1*/



/*const number = document.getElementById("number");

number.innerText = JSON.stringify(localStorage.getItem('count')) ?? 0;*/


const number = document.getElementById("count"); // взяли тег

const count = localStorage.getItem('count') ?? 0; // значення лічильника старе

const result = (Number(count) + 1).toString(); // формуємо операцію
number.innerText = result; // записуємо туди оновлене значення, в тег
localStorage.setItem('count', result); // записуємо оновлене значення в localstorage







//localStorage.setItem(countName, num);