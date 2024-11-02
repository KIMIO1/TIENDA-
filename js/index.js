// Esperar que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Animar las tarjetas de características
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 200); // Delay para la animación de entrada
    });
    
    // Animar la sección de soporte al hacer scroll
    const soporteSection = document.querySelector('.soporte-content');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                soporteSection.classList.add('fade-in');
            }
        });
    });

    observer.observe(soporteSection);
});
s