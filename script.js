// Asegura que el código se ejecute solo cuando todo el HTML haya cargado por completo
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SELECCIÓN DE ELEMENTOS DEL DOM
    const botonesFiltro = document.querySelectorAll(".filter-btn");
    const tarjetasPlatos = document.querySelectorAll(".menu-card");

    // 2. ESCUCHADOR DE EVENTOS (EVENT LISTENERS)
    // Recorremos cada botón para detectar cuándo el usuario hace un clic
    botonesFiltro.forEach(boton => {
        boton.addEventListener("click", (evento) => {
            
            // A. CAMBIO VISUAL DEL BOTÓN ACTIVO
            // Quitamos la clase 'active' de todos los botones y se la ponemos solo al que recibió el clic
            botonesFiltro.forEach(btn => btn.classList.remove("active"));
            evento.target.classList.add("active");

            // B. CAPTURA DINÁMICA DEL ATRIBUTO DE DATOS (DATA-ATTRIBUTE)
            // Si el botón dice data-filter="ceviches", guardará la palabra "ceviches" con V automáticamente
            const categoriaSeleccionada = evento.target.getAttribute("data-filter");

            // C. LÓGICA CONDICIONAL Y MANIPULACIÓN DEL DOM
            // Recorremos cada plato de la carta para decidir si lo mostramos o lo ocultamos
            tarjetasPlatos.forEach(plato => {
                // Lee el valor de 'data-category' de la tarjeta del plato actual
                const categoriaPlato = plato.getAttribute("data-category");

                // CONDICIÓN: Si el botón es "todos" O si las palabras coinciden exactamente...
                if (categoriaSeleccionada === "todos" || categoriaSeleccionada === categoriaPlato) {
                    plato.classList.remove("hide"); // Muestra el plato en la cuadrícula Grid
                } else {
                    plato.classList.add("hide");    // Oculta el plato usando display: none en el CSS
                }
            });

        });
    });

});
