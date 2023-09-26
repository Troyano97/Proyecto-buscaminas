let tiempo = 0;
let cronometro;

function iniciarCronometro() {
   tiempo = 0;
   actualizarCronometro();
   clearInterval(cronometro);
   cronometro = setInterval(function () {
      tiempo++;
      actualizarCronometro();
   }, 1000);
}

function detenerCronometro() {
   clearInterval(cronometro);
}

function actualizarCronometro() {
   const cronometroElemento = document.getElementById('cronometro')
   cronometroElemento.textContent = tiempo + `s`;
}


function crearJuego() {

   //obtiene la dificultad
   let selectDificutad = document.getElementById("dificultad");
   let dificultad = selectDificutad.value;

   let filas, columnas, cantidadBombas;
   switch (dificultad) {
      case "facil":
         filas = 8;
         columnas = 8;
         cantidadBombas = 10;
         break;
      case "intermedio":
         filas = 12;
         columnas = 12;
         cantidadBombas = 40;
         break;
      case "experto":
         filas = 16;
         columnas = 16;
         cantidadBombas = 99;
         break;
      default:
         filas = 8;
         columnas = 8;
         cantidadBombas = 10;
         break;
   }

   //crea la matriz vacia
   let matrizJuego = [];
   for (let i = 0; i < filas; i++) {
      matrizJuego.push([]);
      for (let j = 0; j < columnas; j++) {
         matrizJuego[i].push(0);
      }
   }

   //coloca las bombas de forma aleatoria dentro de la matriz
   const totalCasillas = filas * columnas;
   const bombas = new Set();

   do {
      const casillaAleatoria = Math.floor(Math.random() * totalCasillas)
      bombas.add(casillaAleatoria)
   } while (bombas.size < cantidadBombas)

   bombas.forEach((casillaAleatoria) => {
      const fila = Math.floor(casillaAleatoria / columnas)
      const columna = casillaAleatoria % columnas;
      matrizJuego[fila][columna] = '💣'
   });

   for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
         if (matrizJuego[i][j] !== '💣') {
            let bombasCercanas = 0;

            for (let x = -1; x <= 1; x++) {
               for (let y = -1; y <= 1; y++) {
                  const filaAdyacente = i + x;
                  const columnaAbyasente = j + y;

                  if (
                     filaAdyacente >= 0 &&
                     filaAdyacente < filas &&
                     columnaAbyasente >= 0 &&
                     columnaAbyasente < columnas &&
                     matrizJuego[filaAdyacente][columnaAbyasente] === '💣'
                  ) {
                     bombasCercanas++;
                  }
               }
            }

            matrizJuego[i][j] = bombasCercanas;
         }
      }
   }



   //crea el html para la interfaz del juego
   let contenidoHTML = '';
   let contador = 0;
   for (let i = 0; i < filas; i++) {
      contenidoHTML += '<div class="row">';


      for (let j = 0; j < columnas; j++) {
         const casillaID = contador++;
         const colocarBombas = matrizJuego[i][j];
         contenidoHTML += `<div id="casilla-${casillaID}" class="col casilla">${colocarBombas}</div>`;

      }
      contenidoHTML += '</div>';
   }


   iniciarCronometro()

   document.getElementById('cont-juego').innerHTML = contenidoHTML;
}
