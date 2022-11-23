function trocaImagem(objeto, caminhoNovaImagem, caminhoAntigo){

    let img = document.getElementById(objeto)

    let atual = (img.src.split("/").pop())

    if(atual == caminhoNovaImagem){
        document.getElementById(objeto).src = caminhoAntigo;
    }else{
        document.getElementById(objeto).src = caminhoNovaImagem; 
    }
}

function frase(){

    let espaco = document.getElementById("a");

    espaco.innerHTML = "<br> Agradeço a minha namorada e meus pais por tudo o que fizeram e fazem por mim, não sei se estaria aqui sem eles... <br>";
    
}