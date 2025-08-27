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
}
    
function limpiarCaja(){
    document.getElementById("amigo").value="";
}