function trocaImagem(objeto, caminhoNovaImagem, caminhoAntigo){

    let img = document.getElementById(objeto)

    let atual = (img.src.split("/").pop())

    if(atual == caminhoNovaImagem){
        document.getElementById(objeto).src = caminhoAntigo;
    }else{
        document.getElementById(objeto).src = caminhoNovaImagem; 
    }
}