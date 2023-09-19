const casilla = document.querySelectorAll(".casilla");
const x = "X";
const o = "O";
let turno = "jugador1";
let juegoTerminado = false;
let boton = document.getElementById("boton");
let partidasJugadas = localStorage.getItem("partidasJugadas");

boton.addEventListener("click", reiniciarJuego);

function reiniciarJuego() {
    casilla.forEach(casillero => {
        casillero.innerText = ""
    });
    turno = "jugador1"; // Restablecer el turno
    juegoTerminado = false; // Reiniciar el estado del juego

    // Incrementar el contador de partidasJugadas y actualizar en el Local Storage
    if (partidasJugadas === null) {
        partidasJugadas = 1;
    } else {
        partidasJugadas = parseInt(partidasJugadas) + 1;
    }
    localStorage.setItem("partidasJugadas", partidasJugadas);
}

function activarEventListeners() {
    casilla.forEach((casillero, i) => {
        casillero.addEventListener("click", () => {
            if (!juegoTerminado && casillero.textContent === "") {
                casillero.innerText = turno === "jugador1" ? x : o;
                turno = turno === "jugador1" ? "jugador2" : "jugador1";
                resultado();
            }
        });
    });
}

activarEventListeners();

function resultado() {
    const tabla = Array.from(casilla).map(casillero => casillero.textContent)
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Combinaciones Horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //  Combinaciones Verticales
        [0, 4, 8], [2, 4, 6] // Combinaciones Diagonales
    ];

    for (const combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (tabla[a] && tabla[a] === tabla[b] && tabla[a] === tabla[c]) {
            alert("¡Hay un ganador! Y es: " + (tabla[a]));
            return;
        }
    }

    // Si no hay ganador y todas las casillas están ocupadas, es un empate
    if (!tabla.includes("") && !tabla.includes(undefined)) {
        alert("¡Es un empate!");
    }
}


//localstorage

if(partidasJugadas === null){
    partidasJugadas = 0;
} else {
    partidasJugadas = parseInt(partidasJugadas);
}

partidasJugadas ++;

localStorage.setItem("partidasJugadas", partidasJugadas);

if (partidasJugadas >= 10){
    alert("Ya no puedes jugar más")
};