document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Inicializar AOS (Animações ao rolar)
    AOS.init({ duration: 800, once: true });

    // 2. Animação SVG (Anime.js site)
    const textPath = anime({
        targets: '.svg-text',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: 500,
        direction: 'alternate',
        loop: false
    });

    // Colorir o título
    setTimeout(() => {
        const svgText = document.querySelector('.svg-text');
        if(svgText) svgText.style.transition = 'fill 1.5s ease';
        if(svgText) svgText.style.fill = '#000000';
    }, 3200);

  
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                alert('Mensagem enviada com sucesso!');
                form.reset();
            }
            form.classList.add('was-validated');
        }, false);
    });
});

// Layout Animado (anime.js)

function startGridAnimation() {
    const grid = document.querySelector('.grid-layout');
    let currentGrid = 1;

    setInterval(() => {
        currentGrid = (currentGrid % 4) + 1;
        
    
        anime({
            targets: '.card-curiosidade',
            scale: [1, 0.98, 1],
            duration: 800,
            easing: 'easeInOutQuad',
            delay: anime.stagger(100), 
            begin: () => {
                               grid.dataset.grid = currentGrid;
            }
        });
    }, 4500); 
}

// Inicia a função
startGridAnimation();


//teste navbar não tava linkando//

document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', function(e) {

        e.preventDefault();

        const alvo = document.querySelector(
            this.getAttribute('href')
        );

        alvo.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});