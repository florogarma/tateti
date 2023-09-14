const casilla = document.querySelectorAll(".casilla");
const x = "X";
const o = "O";
let turno = "jugador1"

casilla.forEach((casilla, i) => {
    
    casilla.addEventListener("click", ()=> {
        console.log("CASILLA", i);
        casilla.innerText = turno === "jugador1" ? x : o;
        turno = turno === "jugador1" ? "jugador2" : "jugador1";
    }
    )
});