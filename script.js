function crearJuego() {
   //obtiene la dificultad
   let selectDificutad = document.getElementById("dificultad");
   let dificultad = selectDificutad.value;

   let filas, columnas;
   switch (dificultad) {
      case "facil":
         filas = 8;
         columnas = 8;
         break;
      case "intermedio":
         filas = 12;
         columnas = 12;
         break;
      case "experto":
         filas = 16;
         columnas = 16;
         break;
      default:
         filas = 8;
         columnas = 8;
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

   //crea el html para la interfaz del juego
   let contenidoHTML = '';
   for (let i = 0; i < filas; i++) {
      contenidoHTML += '<div class="row">';


      for (let j = 0; j < columnas; j++) {
         contenidoHTML += '<div class="col casilla"></div>';

      }
      contenidoHTML += '</div>';
   }

   document.getElementById('cont-juego').innerHTML = contenidoHTML;
}