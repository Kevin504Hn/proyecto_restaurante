document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia a los elementos HTML
    const contadores = document.querySelectorAll('.contador');
    const botonesRestar = document.querySelectorAll('.restar');
    const botonesSumar = document.querySelectorAll('.sumar');

    // Función para actualizar el contador y mostrarlo en la página
    function actualizarContador(contadorElemento, cantidad) {
        contadorElemento.textContent = cantidad;
    }

    // Event listener para los botones de restar
    botonesRestar.forEach(function(botonRestar, index) {
        botonRestar.addEventListener('click', function() {
            const contadorElemento = contadores[index];
            let cantidad = parseInt(contadorElemento.textContent);
            if (cantidad > 0) {
                cantidad--; // Restar uno a la cantidad solo si es mayor que cero
                actualizarContador(contadorElemento, cantidad);
            }
        });
    });

    // Event listener para los botones de sumar
    botonesSumar.forEach(function(botonSumar, index) {
        botonSumar.addEventListener('click', function() {
            const contadorElemento = contadores[index];
            let cantidad = parseInt(contadorElemento.textContent);
            cantidad++; // Sumar uno a la cantidad
            actualizarContador(contadorElemento, cantidad);
        });
    });
});
