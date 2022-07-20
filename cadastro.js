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

    // Name

    function validatorName(name) {
        const regExpName = /^[A-z]+\ [A-z]+\ ?([A-z]+)?\ ?([A-z]+)?\ ?([A-z]+)?\ ?([A-z]+)?\ ?([A-z]+)?\ ?([A-z]+)?$/
        return regExpName.test(name)
    }

    if(validatorName(nameValue) === false || nameValue.length < 4) {
        const nameDIV = document.getElementById('nameDIV')
        nameDIV.classList.add("error")
        
        const erroName = document.getElementById('erroName')
        erroName.textContent = 'Insira nome e sobrenome'

    } else {
        const nameDIV = document.getElementById('nameDIV')
        nameDIV.classList.add("sucess")
        nameDIV.classList.remove("error")

        checkoutName = true
    }

    // Email

    function validatorEmail(email) {
        const regExpEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
        return regExpEmail.test(email)
    }
    
    if (validatorEmail(emailValue) === false) {
        const emailDIV = document.getElementById('emailDIV')
        emailDIV.classList.add("error")
        
        const erroEmail = document.getElementById('erroEmail')
        erroEmail.textContent = 'Email invalido (ex: abc@abc.com)'
        
    } else {
        const emailDIV = document.getElementById('emailDIV')
        emailDIV.classList.add("sucess")
        emailDIV.classList.remove("error")

        checkoutEmail = true
    }

    // Telephone

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

    // Password

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

    // Confirm Password

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

    // Verification

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