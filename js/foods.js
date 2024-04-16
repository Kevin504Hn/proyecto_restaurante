document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const contenedorBotones = card.querySelector('.contenedor-botones');
        const priceSelectors = card.querySelectorAll('.price-selector');
        const contador = card.querySelector('.contador');
        const restarBtn = card.querySelector('.restar');
        const sumarBtn = card.querySelector('.sumar');
        const priceItems = card.querySelector('.price-items');

        // Función para actualizar el contador y mostrarlo en la página
        function actualizarContador(cantidad) {
            contador.textContent = cantidad;
        }

        // Event listener para el botón de restar
        restarBtn.addEventListener('click', function() {
            let cantidad = parseInt(contador.textContent);
            if (cantidad > 0) {
                cantidad--;
                actualizarContador(cantidad);
            }
        });

        // Event listener para el botón de sumar
        sumarBtn.addEventListener('click', function() {
            let cantidad = parseInt(contador.textContent);
            cantidad++;
            actualizarContador(cantidad);
        });

        // Event listener para los botones de selección de precio
        cards.forEach(card => {
            const priceSelectors = card.querySelectorAll('.price-selector');
    
            // Event listener para los botones de selección de precio
            priceSelectors.forEach(selector => {
                selector.addEventListener('click', () => {
                    // Desactivar todos los botones de precio dentro de la misma tarjeta
                    priceSelectors.forEach(button => {
                        button.classList.remove('selected');
                    });
    
                    // Activar el botón seleccionado
           
                    selector.classList.add('selected');
                }); 
            });
        });
    });
 });

