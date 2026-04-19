/*
 * TechAssist - Sistema de Aprendizaje Interactivo
 * Copyright (c) 2024 TechAssist
 * Autor: Angel Jesús Romero Pérez
 * 
 * Este archivo es parte de TechAssist y está protegido por derechos de autor.
 * Uso no autorizado de este código está prohibido.
 */

document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', async function(e) {
            e.preventDefault();

            const loadingOverlay = document.getElementById('loadingOverlay');
            if (loadingOverlay) loadingOverlay.classList.remove('vanish');

            try {
                const response = await fetch('../controllers/logoutController.php', {
                    method: 'POST',
                    credentials: 'same-origin'
                });

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.message);
                } else {
                    window.location.href = '../../index.php';
                }
            } catch (error) {
                console.error('Error:', error);
                const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
                document.getElementById('errorMsg').textContent = 'Error al cerrar sesión';
                errorModal.show();
            } finally {
                if (loadingOverlay) loadingOverlay.classList.add('vanish');
            }
        });
    }
});