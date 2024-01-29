function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btn = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btn.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type','password')
        btn.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
}