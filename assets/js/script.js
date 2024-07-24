// Solicitar al usuario las repeticiones del juego
let repeticiones = Number(prompt("Cuantas veces quiere jugar?"));
let repeticion = 1;
let empate = 0;
let victoria = 0;
let derrota = 0;
//Ejecucion del juego
while (repeticion <= repeticiones) {
  let jugada = Number(prompt("Ingrese 1: para jugar PAPEL, Ingrese 2: para jugar PIEDRA, Ingrese 3: para jugar TIJERA") - 1);
  
  let jugadaMaquina = Math.floor(Math.random() * 3);
  
  switch (jugada) {
    //Determinacion de Ganador, Perdedor o empate
    case 0:
      if (jugadaMaquina == 0) {
        alert("Empate");
        empate++;
      } else if (jugadaMaquina == 1) {
        alert("Ganaste");
        victoria++
      } else {
        alert("Perdiste");
        derrota++;
      }
      break;
    case 1:
      if (jugadaMaquina == 0) {
        alert("Perdiste");
        derrota++
      } else if (jugadaMaquina == 1) {
        alert("Empate");
        empate++
      } else {
        alert("Ganaste");
        victoria++
      }
      break;
    case 2:
      if(jugadaMaquina == 0){
        alert("Ganaste");
        victoria++
      } else if (jugadaMaquina == 1){
        alert("Perdiste");
        derrota++
      } else {
        alert("Empate");
        empate++
      }
      break;
      //Alerta por ingreso no valido entre las opciones
    default:
      alert("La opcion ingresada no es valida");
  }

  repeticion++;
}
// Grafico de veces ganas empatadas o perdidas contra la maquina
document.write(`<h1>Ganaste ${victoria} veces</h1><h2>Perdiste ${derrota} veces</h2><h2>Empate ${empate} veces</h2>`)

//Mensaje de resultado
if(victoria > derrota && victoria >= empate){
  alert("La hiciste Sara O'Connor GANASTE!")
} else if(derrota > victoria && derrota >= empate){
  alert("Skynet is active PERDISTE")
} else if(victoria == derrota){
  alert("EMPATE, Aun no sabemos si ChatGPT o la humanidad la lleva..")
}