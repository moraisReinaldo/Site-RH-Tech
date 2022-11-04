function trocaImagem(objeto, caminhoNovaImagem, caminhoAntigo){

    let img = document.getElementById(objeto)

    if(img.src == caminhoNovaImagem){
        
        document.getElementById(objeto).src = caminhoAntigo;
    }else{

        document.getElementById(objeto).src = caminhoNovaImagem; 
    }
}