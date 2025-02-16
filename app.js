
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




