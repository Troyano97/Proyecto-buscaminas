function crearJuego() {
   let selectDificutad = document.getElementById("dificultad");
   let dificultad = selectDificutad.value;

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


   let matrizJuego = [];
   for (let i = 0; i < filas; i++) {
      matrizJuego.push([]);
      for (let j = 0; j < columnas; j++) {
         matrizJuego[i].push(0);
      }
   }


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