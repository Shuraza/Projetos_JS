document.getElementById('email').addEventListener('input', function(){
    const email = this.value ;
    const emailError = document.getElementById('emailError');

    if (!isValidemail(email)){
        emailError.textContent = 'Formato de e-mail invalido';
        emailError.style.visibility = 'visible';
        this.classList.add('invalid');
    }else{
        emailError.textContent = '';
        emailError.style.visibility = 'hidden';
        this.classList.remove('invalid');
    }
    
});

document.getElementById('password').addEventListener('input', function(){
    const password =this.value;
    const passwordError = document.getElementById('passwordError');

    if(!isValidpassword(password)){
        passwordError. textContent = 'A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas. ';
        passwordError.style.visibility = 'visible';
        this.classList.add('invalid');
    } else{
        passwordError.textContent ='';
        passwordError.style.visibility ='hidden';
        this.classList.remove('invalid');
    }

});

function isValidemail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidpassword(password){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(password);
}

