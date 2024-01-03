let user = {
    name: "Sergey",
    age: 28,
    city: "lviv"
}
console.log(user);

let arr = [2, 5, 6, 7, 86, 89, 12, 13, 4];

let parni = arr.filter(number => number % 2 === 0);
console.log(parni);

let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, voluptatum';

let upperWord = str.split(" ").map(word => word[0].toUpperCase() + word.substring(1));
let upperWord2 = upperWord.join(" ");
console.log(upperWord2);

const form1 = document.forms.form1;

form1.addEventListener('submit', ev => {
    ev.preventDefault();
    const text = document.form1.text;

    const p = document.createElement('p');
    document.body.appendChild(p);
    p.innerText = text.value;
})