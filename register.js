const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const button = document.querySelector('button')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const nameValue = name.value
    const emailValue = email.value
    const passwordValue = password.value

    if (nameValue === '' || emailValue === '' || passwordValue === '') {
        alert('Por favor, preencha todos os campos')
        return;
    }

    const data = {
        name: nameValue,
        email: emailValue,
        password: passwordValue
    }

    fetch('http://localhost:3333/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Verifica se o login foi bem-sucedido
        if (data.success) {
            // Redireciona para a página principal
            window.location.href = 'home.html';
        } else {
            // Exibe uma mensagem de erro se o login falhou
            alert('Registro falhou. Verifique suas credenciais.');
        }
    });
});
