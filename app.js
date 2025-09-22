// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value;
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);  // agregar al array
        mostrarAmigos();      // actualizar la lista
        input.value = "";     // limpiar campo
    }
}

// funcion para mostrar amigos de la lista
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpiar lista

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + amigos[i] + "</li>";
    }
}

// funcon para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "<li>El amigo secreto es: " + amigoSorteado + "</li>";
    }
}