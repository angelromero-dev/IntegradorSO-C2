/*
 * TechAssist - Sistema de Aprendizaje Interactivo
 * Copyright (c) 2024 TechAssist
 * Autor: Angel Jesús Romero Pérez
 * 
 * Este archivo es parte de TechAssist y está protegido por derechos de autor.
 * Uso no autorizado de este código está prohibido.
 */
const TechAssist = {
    init() {
        this.initHero();
    },

    // Hero dinámico
    initHero() {
        const hero = document.querySelector('.hero_main');
        if (!hero) return;
    
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Si hacemos scroll hacia abajo
            if (currentScroll > lastScroll) {
                hero.style.transform = `translateY(${-currentScroll * 0.5}px)`;
            } 
            // Si hacemos scroll hacia arriba
            else {
                // Si estamos cerca del top (primeros 10px), regresamos a la posición original
                if (currentScroll < 100) {
                    hero.style.transform = 'translateY(0)';
                } else {
                    hero.style.transform = `translateY(${-currentScroll * 0.5}px)`;
                }
            }
            
            lastScroll = currentScroll;
        });
        
        hero.style.transition = 'transform 0.3s ease-out';
    },

}

TechAssist.init();


document.querySelectorAll('.size-img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.remove('animateImg');
        void img.offsetWidth;
        img.classList.add('animateImg');
        setTimeout(() => {
            img.classList.remove('animateImg');
        }, 1000);
    });
});


function PcMenu() {
    const menu = document.querySelector('.PcMenu');
    
    if (menu.style.display === 'none' || !menu.style.display) {
        // Mostrar el menú
        menu.style.display = 'block';
        menu.classList.remove('hide');
        menu.classList.add('show');
    } else {
        // Ocultar el menú
        menu.classList.remove('show');
        menu.classList.add('hide');
        
        // Esperar a que termine la animación antes de ocultarlo
        setTimeout(() => {
            menu.style.display = 'none';
            menu.classList.remove('hide');
        }, 1000);
    }
}
