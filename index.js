document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,          // Velocidad de escritura
        backSpeed: 30,          // Velocidad de borrado
        startDelay: 1000,       // Retardo antes de empezar
        backDelay: 1500,        // Tiempo de espera antes de borrar
        loop: true,             // Hacer que se repita
        showCursor: true,       // Mostrar el cursor parpadeante
        cursorChar: '|',        // Carácter del cursor
        autoInsertCss: true,    // Insertar CSS automáticamente
        fadeOut: true,          // Efecto de desvanecimiento
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500
    });
});