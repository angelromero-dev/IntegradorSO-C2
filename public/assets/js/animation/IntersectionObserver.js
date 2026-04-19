
// ── Scroll reveal ─────────────────────────────────
const revealEls = document.querySelectorAll('.reveal-up');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ── Parallax al scroll ────────────────────────────
const eliteSection = document.querySelector('.elite-xp');
const eliteVideo = document.querySelector('.elite-xp__video-bg');
const eliteOverlay = document.querySelector('.elite-xp__overlay');
const eliteContent = document.querySelector('.elite-xp__content');
const elitePills = document.querySelectorAll('.elite-xp__pill');
const scrollHint = document.querySelector('.elite-xp__scroll-hint');

function getProgress() {
    const rect = eliteSection.getBoundingClientRect();
    const winH = window.innerHeight;
    // 0 = sección entrando por abajo | 1 = sección saliendo por arriba
    const raw = (winH - rect.top) / (winH + rect.height);
    return Math.min(Math.max(raw, 0), 1);
}

function onScroll() {
    if (!eliteSection) return;

    const p = getProgress();

    // 1 · VIDEO — parallax (sube más lento que el scroll)
    eliteVideo.style.transform = `translateY(${p * 130}px)`;

    // 2 · OVERLAY — se oscurece al bajar
    const a = 0.45 + p * 0.45;
    eliteOverlay.style.background = `
      linear-gradient(180deg,
        rgba(13,13,13,${(a * 0.8).toFixed(2)}) 0%,
        rgba(13,13,13,${a.toFixed(2)}) 45%,
        rgba(13,13,13,${Math.min(a + 0.1, 0.96).toFixed(2)}) 100%),
      radial-gradient(ellipse at center bottom,
        rgba(201,168,76,${(0.20 - p * 0.18).toFixed(2)}) 0%,
        transparent 65%)
    `;

    // 3 · CONTENIDO — flota hacia arriba
    eliteContent.style.transform = `translateY(${p * -50}px)`;

    // 4 · PILLS — onda escalonada
    elitePills.forEach((pill, i) => {
        const wave = Math.sin(p * Math.PI * 2 + i * 0.7) * 12;
        pill.style.transform = `translateY(${wave}px)`;
    });

    // 5 · FLECHA — desaparece rápido
    if (scrollHint) scrollHint.style.opacity = Math.max(1 - p * 6, 0);
}

// Escucha scroll con requestAnimationFrame para suavidad
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            onScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Ejecuta una vez al cargar por si ya está en vista
onScroll();
