let registration = JSON.parse (localStorage.getItem('Registration'))

const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.getElementById('email')
    const emailValue = email.value;
    
    const password = document.getElementById('password')
    const passwordValue = password.value;

    if(emailValue == registration.email) {
        const emailDIV = document.getElementById('emailDIV')
        emailDIV.classList.add("sucess")
        emailDIV.classList.remove("error")
    } else {
        const emailDIV = document.getElementById('emailDIV')
        emailDIV.classList.add("error")
        
        const erroEmail = document.getElementById('erroEmail')
        erroEmail.textContent = 'Insira um email cadastrado'
    }

    if(passwordValue == registration.password) {
        const passwordDIV = document.getElementById('passwordDIV')
        passwordDIV.classList.add("sucess")
        passwordDIV.classList.remove("error")
    } else {
        const passwordDIV = document.getElementById('passwordDIV')
        passwordDIV.classList.add("error")
        
        const erroPassword = document.getElementById('erroPassword')
        erroPassword.textContent = 'Insira a senha cadastrada'
    }
    
})

