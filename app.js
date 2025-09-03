let amigos = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    amigoUsuario = document.getElementById("amigo").value.trim();  
    if (amigoUsuario == ""){
        alert("Debe insertar un amigo para añadirlo en la lista");
        return;
    }
    amigos.push(amigoUsuario);  
    console.log(amigos);    
    limpiarCaja();
    actualizaLista();
}
    
function limpiarCaja(){
    document.getElementById("amigo").value="";
}

function actualizaLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i =0; i<amigos.length;i++){
        let listaAmigos = amigos[i];
        let li = document.createElement("li");
        li.textContent = listaAmigos;
        lista.appendChild(li);
    }    
}

function sortearAmigo() {
    if (!amigos || amigos.length === 0) {
        alert("Aún no agrega amigos");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo sorteado es: " + amigoSorteado;
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}

