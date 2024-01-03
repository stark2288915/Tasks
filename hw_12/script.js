const url = new URL('http://jsonplaceholder.typicode.com/users');


const h2 = document.createElement('h2');
document.body.append(h2);
h2.innerText = 'A list of users.';
const ul = document.createElement('ul');
document.body.append(ul);

fetch(url).then(users => users.json())
    .then(users => {
        users.forEach(user => {
            const li = document.createElement('li');
            ul.appendChild(li);

            const a = document.createElement('a');
            li.appendChild(a);
            a.href = `./users.html?user=${JSON.stringify(user)}`;
            a.innerText = `${user.id}. ${user.name}`;
        })

    });








