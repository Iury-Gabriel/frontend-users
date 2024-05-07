const usersEl = document.querySelector('#users')

fetch('https://api-node-crud-ofg3.onrender.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.users.forEach(user => {
            const li = document.createElement('li')
            li.innerText = user.name
            usersEl.appendChild(li)
        })
    })
