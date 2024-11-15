/*document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 50, // Velocidad de escritura
    backSpeed: 30, // Velocidad de borrado
    startDelay: 1000, // Retardo antes de empezar
    backDelay: 1500, // Tiempo de espera antes de borrar
    loop: true, // Hacer que se repita
    showCursor: true, // Mostrar el cursor parpadeante
    cursorChar: "|", // Carácter del cursor
    autoInsertCss: true, // Insertar CSS automáticamente
    fadeOut: true, // Efecto de desvanecimiento
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
  });
  });
*/

document.addEventListener("DOMContentLoaded", () => {
    // Inicialización del efecto typing
    if (!window.typed) {
      // Agregar la inicialización de Typed.js
      new Typed("#typed", {
        stringsElement: "#typed-strings",  // Este es el contenedor con el texto
        typeSpeed: 100,                    // Velocidad de tipeo
        backSpeed: 20,                     // Velocidad de retroceso
        loop: true,                        // Hacer que el typing sea infinito
        loopCount: Infinity,               // Número de repeticiones, "Infinity" es infinito
      });
    }
  
    // Resto del código (como el parallax)
    const container = document.querySelector(".hero-full-container");
    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
    let rafId = null;
  
    // Función throttle para optimizar el evento mousemove
    function throttle(func, limit) {
      let inThrottle;
      return function (event) {
        if (!inThrottle) {
          func(event);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    }
  
    // Manejador del movimiento del mouse optimizado
    const handleMouseMove = throttle((e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.015;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.015;
  
      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    }, 16);
  
    function animate() {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
  
      container.style.backgroundPosition = `calc(50% + ${currentX}px) calc(50% + ${currentY}px)`;
  
      rafId = null;
      if (
        Math.abs(mouseX - currentX) > 0.01 ||
        Math.abs(mouseY - currentY) > 0.01
      ) {
        rafId = requestAnimationFrame(animate);
      }
    }
  
    // Event Listener con passive true para mejor rendimiento
    document.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });
  
    // Limpieza de recursos
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  });
  