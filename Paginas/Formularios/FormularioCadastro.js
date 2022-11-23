function cadastrar(){

    let nomeI = document.getElementById("nomeI").value;
    let nomeF = document.getElementById("nomeF").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("pwd").value;
    let radio = document.querySelector('input[name="v"]:checked').value;
    var genero = document.getElementById("opcao").value;
    let lembrar = document.getElementById("flexCheckChecked");

    let saida = document.getElementById("fim");
    saida.innerHTML = "Cadastro concluido com os dados: <br> Nome: " + nomeI + "<br>Email: " + email + "<br>Lembrar: " + lembrar.checked;
    return false;
}