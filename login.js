
let user ={
    name: 'mich',
    password: 1234
}

function logar() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == user.name && password == user.password){
        alert('Logado')
    }else{
        alert("credenciais incorretas")
    }
    
}