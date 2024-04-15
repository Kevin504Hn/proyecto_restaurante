document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia a los elementos HTML
    const contador = document.getElementById('contador');
    const botonRestar = document.getElementById('restar');
    const botonSumar = document.getElementById('sumar');

    // Variable para almacenar el contador
    let cantidad = 0;

    // Función para actualizar el contador y mostrarlo en la página
    function actualizarContador() {
        contador.textContent = cantidad;
    }

    // Event listener para el botón de restar
    botonRestar.addEventListener('click', function() {
        if (cantidad > 0) {
            cantidad--; // Restar uno a la cantidad solo si es mayor que cero
            actualizarContador();
        }
    });

    // Event listener para el botón de sumar
    botonSumar.addEventListener('click', function() {
        cantidad++; // Sumar uno a la cantidad
        actualizarContador();
    });

    // Mostrar el contador inicial
    actualizarContador();
});

