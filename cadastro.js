const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
    e.preventDefault()

    let person = {
        name: "",
        email: "",
        tel: "",
        password: "",
    };

    const name = document.getElementById('name')
    const nameValue = name.value;
    
    const email = document.getElementById('email')
    const emailValue = email.value;
    
    const telephone = document.getElementById('telephone')
    const telephoneValue = telephone.value;
    
    const password = document.getElementById('password')
    const passwordValue = password.value;
    
    const confirmPassword = document.getElementById('confirmPassword')
    const confirmPasswordValue = confirmPassword.value;

    let checkoutName = false
    let checkoutEmail = false
    let checkoutTelefone = false
    let checkoutPassword = false
    let checkoutConfirmPassword = false

    if(nameValue.length < 4) {
        const nameDIV = document.getElementById('nameDIV')
        nameDIV.classList.add("error")
        
        const erroName = document.getElementById('erroName')
        erroName.textContent = 'Insira mais de 3 letras'

    } else {
        const nameDIV = document.getElementById('nameDIV')
        nameDIV.classList.add("sucess")
        nameDIV.classList.remove("error")

        checkoutName = true
    }

    if(emailValue === "" || emailValue.length < 6 || emailValue.search("@") == -1 || emailValue.indexOf(".") < 1 || emailValue.indexOf(" ") > 0) {
        const emailDIV = document.getElementById('emailDIV')
        emailDIV.classList.add("error")
        
        const erroEmail = document.getElementById('erroEmail')
        erroEmail.textContent = 'Email invalido'
        
    } else {
        const emailDIV = document.getElementById('emailDIV')
        emailDIV.classList.add("sucess")
        emailDIV.classList.remove("error")

        checkoutEmail = true
    }

    if(telephoneValue.length === 11) {
        const telephoneDIV = document.getElementById('telephoneDIV')
        telephoneDIV.classList.add("sucess")
        telephoneDIV.classList.remove("error")
        
        checkoutTelefone = true
    } else {
        const telephoneDIV = document.getElementById('telephoneDIV')
        telephoneDIV.classList.add("error")
        
        const erroTelephone = document.getElementById('erroTelephone')
        erroTelephone.textContent = 'Insira um numero valido'

    }

    if(passwordValue.length > 5) {
        const passwordDIV = document.getElementById('passwordDIV')
        passwordDIV.classList.add("sucess")
        passwordDIV.classList.remove("error")

        checkoutPassword = true
    } else {
        const passwordDIV = document.getElementById('passwordDIV')
        passwordDIV.classList.add("error")
        
        const erroPassword = document.getElementById('erroPassword')
        erroPassword.textContent = 'Insira mais de 5 caracteres'
    }

    if(confirmPasswordValue === passwordValue && confirmPasswordValue !== "") {
        const confirmPasswordDIV = document.getElementById('confirmPasswordDIV')
        confirmPasswordDIV.classList.add("sucess")
        confirmPasswordDIV.classList.remove("error")

        checkoutConfirmPassword = true
    } else {
        const confirmPasswordDIV = document.getElementById('confirmPasswordDIV')
        confirmPasswordDIV.classList.add("error")

        const erroConfirmPassword = document.getElementById('erroConfirmPassword')
        erroConfirmPassword.textContent = 'Senha invalida'
    }

    if(checkoutName && checkoutEmail && checkoutTelefone && checkoutPassword && checkoutConfirmPassword) {
        
        let person = {
            name: nameValue,
            email: emailValue,
            tel: telephoneValue,
            password: confirmPasswordValue,
        };
        
        localStorage.setItem('Registration', JSON.stringify(person))

        window.location.href = "./login.html"
    }
    
})