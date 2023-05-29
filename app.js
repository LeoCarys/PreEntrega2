const campeones = [
  { nombre: "Ashe", ataque: 80, defensa: 60, habilidad: "Flecha de Cristal Encantada" },
  { nombre: "Malphite", ataque: 60, defensa: 80, habilidad: "Golpe Sísmico" },
  { nombre: "Ezreal", ataque: 90, defensa: 40, habilidad: "Disparo Místico" },
  { nombre: "Lux", ataque: 70, defensa: 50, habilidad: "Finales Brillantes" },
  { nombre: "Darius", ataque: 85, defensa: 75, habilidad: "Cuchillada Decisiva" },
  { nombre: "Ahri", ataque: 75, defensa: 35, habilidad: "Orbe del Engaño" },
  { nombre: "Garen", ataque: 70, defensa: 85, habilidad: "Justicia Demaciana" }
];


const nombresCampeones = campeones.map(campeon => campeon.nombre);


const mensajeOpciones = `Campeones disponibles:\n${nombresCampeones.join("\n")}`;


const buscarCampeonPorNombre = nombre => campeones.find(campeon => campeon.nombre.toLowerCase() === nombre.toLowerCase());


const nombreCampeon1 = prompt(mensajeOpciones + "\n\nElige el primer campeón:");


const campeon1 = buscarCampeonPorNombre(nombreCampeon1);


if (!campeon1) {
  console.log("Campeón no encontrado.");
} else {

  const nombreCampeon2 = prompt(mensajeOpciones + "\n\nElige el segundo campeón:");


  const campeon2 = buscarCampeonPorNombre(nombreCampeon2);

  if (!campeon2) {
    console.log("Campeón no encontrado.");
  } else {

    console.log(`Campeones seleccionados:\n\n${campeon1.nombre}\n${campeon2.nombre}`);


    const ataqueTotal = campeon1.ataque + campeon2.ataque;
    const defensaTotal = campeon1.defensa + campeon2.defensa;

 
    let ganador;
    if (ataqueTotal > defensaTotal) {
      ganador = campeon1.nombre;
    } else if (defensaTotal > ataqueTotal) {
      ganador = campeon2.nombre;
    } else {
      ganador = "Empate";
    }


    alert(`El ganador del combate es: ${ganador}`);
  }
}
