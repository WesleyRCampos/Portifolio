
function criptografar(){
    
    var output = document.querySelector("#cripto");
    
    document.getElementById("#retangulo").style.display = "none";
    document.getElementById("#cripto").style.display = "inline-block";

    //pega texto do input
    var input = document.querySelector("#texto");
    var mensagem = input.value;
    var novaMensagem = "";

    //transforma em array
    var listaLetra = mensagem.split("");

    //usa for para percorrer array
    for(var i=0; i<listaLetra.length; i++){
        //se caractere for igual umas das keys criptografa
        if(listaLetra[i] == "a"){
            listaLetra[i] = "ai";
        }
        else if(listaLetra[i] == "e"){
            listaLetra[i] = "enter";
        }
        else if(listaLetra[i] == "i"){
            listaLetra[i] = "imes";
        }
        else if(listaLetra[i] == "o"){
            listaLetra[i] = "ober";
        }
        else if(listaLetra[i] == "u"){
            listaLetra[i] = "ufat";
        }
        novaMensagem = novaMensagem + listaLetra[i];
    }
    //enviar mensagem criptografada para output
    output.value = novaMensagem;
}

function descriptografar(){
    
    var output = document.querySelector("#cripto");
    
    //document.getElementById("#retangulo").style.display = "none";
    //document.getElementById("#quadrado-cripto").style.display = "inline-block";

    //pega texto do input
    var input = document.querySelector("#texto");
    var mensagem = input.value;

    //decodifica
    mensagem = mensagem.replaceAll("ai", "a");
    mensagem = mensagem.replaceAll("enter", "e");
    mensagem = mensagem.replaceAll("imes", "i");
    mensagem = mensagem.replaceAll("ober", "o");
    mensagem = mensagem.replaceAll("ufat", "u");
    //enviar mensagem criptografada para output
    output.value = mensagem;
}

function copiar(){

    var output = document.querySelector("#cripto");
    navigator.clipboard.writeText(output.value);
    alert("Texto copiado!");
}

textarea = document.querySelector("#texto");
textarea.addEventListener('input', texto, false);
      
function texto() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';

}

textarea = document.querySelector("#cripto");
textarea.addEventListener('input', cripto, false);
      
function cripto() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';

}
