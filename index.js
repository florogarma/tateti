const casilla = document.querySelectorAll(".casilla");
const x = "X";
const o = "O";
let turno = "jugador1";
let juegoTerminado = false;
let boton = document.getElementById("boton");



boton.addEventListener("click", () => {
    casilla.forEach(casillero => {
        casillero.innerText = ""});
    });

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
    //console.log(tabla);
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    for (const combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (tabla[a] && tabla[a] === tabla[b] && tabla[a] === tabla[c]) {
            console.log("¡Hay un ganador! Y es: " + (tabla[a] === "X" ? nombreJugador1 : nombreJugador2));
            return; // Agrega un return para salir del bucle
        }
    }

    // Si no hay ganador y todas las casillas están ocupadas, es un empate
    if (!tabla.includes("") && !tabla.includes(undefined)) {
        console.log("¡Es un empate!");
    }
}



