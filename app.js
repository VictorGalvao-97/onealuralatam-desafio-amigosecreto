var amigos = []

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    
    if (validaInput(amigo)){
        limparCampo();
        return
    }

    let lista = document.getElementById("listaAmigos").innerHTML;
    lista = lista +"<li>"+amigo+"</li>";

    document.getElementById("listaAmigos").innerHTML = lista;
    limparCampo();
} 


function sortearAmigo(){
    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let lista = document.getElementById("resultado").innerHTML;
    lista = lista + "<li>"+amigos[amigoSorteado]+"</li>";

    document.getElementById("resultado").innerHTML = lista;
}

function validaInput(amigo){
    if(validaCampoVazio(amigo) || validaNomeRepitido(amigo)){
        return true 
    }
    amigos.push(amigo);
    return false 
}

function validaCampoVazio(amigo){ 
    if(amigo == '' || amigo == "" || amigo.length === 0 ) {
        alert('Por favor, escreva um nome!');
        return true
    }else{ 
        return false
    }
}

function validaNomeRepitido(amigo){
    let isNomeRepitido = false
    for(let i = 0; i < amigos.length; i++) {
        if(amigos[i] === amigo){
            alert("Nome já existente.")
            isNomeRepitido = true
        }
    }
    return isNomeRepitido
}

function limparCampo() {
    let amigo = document.getElementById("amigo");
    amigo.value = '';
}