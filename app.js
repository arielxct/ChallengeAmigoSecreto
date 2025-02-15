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
    // actualizarLista(); // funcion que actualizara la lista de amigos
    input.value = "";
}