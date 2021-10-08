let cantidad = parseInt(prompt("¿Cuantas veces quieres jugar?"));
let piedra = 0;
let papel = 1;
let tijera = 2;
let i = 0;

function user() {
  return parseInt(
    prompt(`Escoge un numero:
    Piedra = 1
    Papel = 2
    Tijera = 3`)
  );
}

function cpu() {
  return parseInt(Math.random(0, 2).toFixed(0));
}

while (i < cantidad) {
  let miResultado = user();
  let maquina = cpu();
  switch (true) {
    case miResultado === 0 && maquina === 1:
      console.log("Perdiste: Piedra vs Papel");
      break;
    case miResultado === 0 && maquina === 2:
      console.log("Ganaste: Piedra vs Tijera");
      break;
    case miResultado === 1 && maquina === 0:
      console.log("Ganaste: Papel vs Piedra");
      break;
    case miResultado === 1 && maquina === 2:
      console.log("Perdiste: Papel vs Tijera");
      break;
    case miResultado === 2 && maquina === 0:
      console.log("Perdiste: Tijera vs Piedra");
      break;
    case miResultado === 2 && maquina === 1:
      console.log("Ganaste: Tijera vs Papel");
      break;
    case miResultado === maquina:
      console.log("Empate entre ambos");
      break;
    default:
      console.log("Perdiste, no has puesto un valor valido.");
      break;
  }

  i++;
}
