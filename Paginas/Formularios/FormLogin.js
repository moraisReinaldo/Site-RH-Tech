function login(){

    let nome = document.getElementById("userName").value;

    let senha = document.getElementById("pwd").value;

    if(nome == "admin@admin.com.br" && senha == "123"){
        let cadastro = document.getElementById("s")
        cadastro.innerHTML = "Entrou no sistema!";
    }else{
        let cadastro = document.getElementById("s")
        cadastro.innerHTML = "Usuario ou senha invalido!";
    }
    return false;
}