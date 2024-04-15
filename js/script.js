let cardWrap = document.querySelector(".cartas .card-wrap");
let cards = cardWrap.querySelectorAll(".card");
let cardWidth = cards[0].offsetWidth; // Obtener el ancho de una tarjeta
let index = 0;

setInterval(function () {
  let translateX = -index * cardWidth; // Calcular el valor de traslación
  cardWrap.style.transition = "transform 1s ease-in-out"; // Aplicar transición suave
  cardWrap.style.transform = "translateX(" + translateX + "px)"; // Aplicar la traslación
  index++;
  if (index >= cards.length) {
    index = 0;
    setTimeout(function () {
      cardWrap.style.transition = "none"; // Eliminar la transición después de completar el ciclo
      cardWrap.style.transform = "translateX(0)"; // Volver al principio sin transición
    }, 1000); // Esperar a que termine la transición antes de restablecer el estado
  }
}, 3000);
