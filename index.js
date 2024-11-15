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


// Inicializa EmailJS
(function() {
    emailjs.init("your_user_id"); // Reemplaza "your_user_id" con tu User ID de EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura los datos del formulario
    const from_email = event.target.from_email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;

    // Enviar el formulario a través de EmailJS
    emailjs.send("service_hqbu5kf", "your_template_id", { // Reemplaza "your_template_id" con tu Template ID
        from_email: from_email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        alert("Mensaje enviado con éxito!");
    }, function(error) {
        alert("Hubo un error al enviar el mensaje. Inténtalo nuevamente.");
    });
});
