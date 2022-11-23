function cadastrar(){

    let nomeI = document.getElementById("nomeI").value;
    let nomeF = document.getElementById("nomeF").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("pwd").value;
    let radio = document.querySelector('input[name="v"]:checked').value;
    let lembrar = document.getElementById("flexCheckChecked").value;

    let saida = document.getElementById("f");
    saida.innerHTML = "<br> Cadastro concluido com os dados: <br> Nome: " + nomeI + "<br>Email: " + email;

}