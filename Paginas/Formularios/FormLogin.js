function login(){

    let nome = document.getElementById("userName").value;

    let senha = document.getElementById("pwd").value;

    let cadastro = document.getElementById("texto")
    cadastro.innerHTML = ("Entrou no sistema!");

    if(nome == "admin@admin.com.br" && senha == "123"){
        alert("Entrou no sistema!")
    }else{
        alert("Usuario Invalido!")
    }

/* window.location.assign("../PaginaIncial/PaginaInicial.html");
    alert("Entrou no sistema!")
*/
}