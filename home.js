const usersEl = document.querySelector('#users')

fetch('http://localhost:3333/users')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.users.forEach(user => {
            const li = document.createElement('li')
            li.innerText = user.name
            usersEl.appendChild(li)
        })
    })
