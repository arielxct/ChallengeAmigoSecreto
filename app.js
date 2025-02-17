
let listado_amigos = [];

// ************(1) funcion agregar amigos ******************
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim().toUpperCase();

    if (nombre === "") {
        alert("Debe ingrear un nombre.");
        return;
    }
    if (!isNaN(nombre)) {
        alert("El nombre no puede ser un número.");
        input.value = "";
        return;
    }
    const regex = /^[A-Za-z\s]+$/; 
    if (!regex.test(nombre)) {
        alert("El nombre no puede contener símbolos especiales.");
        input.value = "";
        return;
    }

    listado_amigos.push(nombre);
    actualizarLista();
    input.value = "";
    input.focus(); // Esta línea agrega el foco al input
}

//*********(2)  funcion actualizar lista **********************
function actualizarLista() {


    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (const amigo of listado_amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }

          
}

// *****************(3)* funcion sortear amigo ******************
function sortearAmigo() {
    if (listado_amigos.length < 2) {
        alert("Agrega al menos dos amigos antes de sortear."); // cpndiciona que por lo menos deben haber dos amigos
        return;
    }

    const indiceListadoSorteado = Math.floor(Math.random() * listado_amigos.length);
    const amigoSecretoSorteado = listado_amigos[indiceListadoSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>⭐ El amigo secreto es: " + amigoSecretoSorteado + " ⭐</li>" ;

}

// *****************(4)* funcion nuevo juego ******************
function nuevoJuego() {
    listado_amigos = []; 
    actualizarLista(); 
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    
    botonSortear.textContent = "    ⭐⭐Sortear amigo 😀😀";
    botonSortear.onclick = sortearAmigo;
}



