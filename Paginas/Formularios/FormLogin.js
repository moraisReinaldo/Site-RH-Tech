function login(){

    let nome = document.getElementById("userName").value;

    let senha = document.getElementById("pwd").value;

    let cadastro = document.getElementById("texto")
    cadastro.innerHTML = ("Entrou no sistema!");

    if(nome == "admin@" && senha == "1234"){
        alert("Entrou no sistema!")
    }

/* window.location.assign("../PaginaIncial/PaginaInicial.html");
    alert("Entrou no sistema!")
*/
}