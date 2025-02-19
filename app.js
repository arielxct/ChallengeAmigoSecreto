let listado_amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim().toUpperCase();

    if (nombre === "") {
        alert("Debe ingrear un nombre.");
        input.focus();
        return;
    }
    if (!isNaN(nombre)) {
        alert("El nombre no puede ser un número.");
        input.value = "";
        input.focus();
        return;
    }
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(nombre)) {
        alert("El nombre no puede contener símbolos especiales.");
        input.value = "";
        input.focus();
        return;
    }

    if (listado_amigos.includes(nombre)) {
        alert("Nombre repetido. Ingrese un nombre diferente.");
        input.value = "";
        input.focus();
        return;
    }

    listado_amigos.push(nombre);
    actualizarLista();
    input.value = "";
    input.focus();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (const amigo of listado_amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listado_amigos.length < 2) {
        alert("Agrega al menos dos amigos antes de sortear.");
        return;
    }

    const indiceListadoSorteado = Math.floor(Math.random() * listado_amigos.length);
    const amigoSecretoSorteado = listado_amigos[indiceListadoSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>⭐ El amigo secreto es: " + amigoSecretoSorteado + " ⭐</li>";

    const botonSortear = document.querySelector(".button-draw");
    botonSortear.textContent = "     ⭐Nuevo Juego ";
    botonSortear.onclick = nuevoJuego;
}

function nuevoJuego() {
    listado_amigos = [];
    actualizarLista();
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const botonSortear = document.querySelector(".button-draw");
    botonSortear.textContent = "    ⭐⭐Sortear amigo ";
    botonSortear.onclick = sortearAmigo;
    
}