/*
 * TechAssist - Sistema de Aprendizaje Interactivo
 * Copyright (c) 2024 TechAssist
 * Autor: Angel Jesús Romero Pérez
 * 
 * Este archivo es parte de TechAssist y está protegido por derechos de autor.
 * Uso no autorizado de este código está prohibido.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos
    const loadingOverlay = document.getElementById('loadingOverlay');
    const errorModal = document.getElementById('errorModal');
    const deleteModal = document.getElementById('deleteModal');
    
    // Manejador del botón de confirmación
    const confirmDeleteBtn = document.getElementById('confirmDelete');
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', async () => {
            try {
                loadingOverlay.classList.remove('vanish');
                if (deleteModal) {
                    deleteModal.classList.remove('show');
                    deleteModal.style.display = 'none';
                }

                const response = await fetch('../controllers/deleteAccountController.php', {
                    method: 'POST',
                    credentials: 'same-origin'
                });

                const data = await response.json();

                if (!data.error) {
                    // Hacer logout y redirigir
                    await fetch('../controllers/logoutController.php', {
                        method: 'POST',
                        credentials: 'same-origin'
                    });
                    window.location.href = '../../index.php';
                } else {
                    showError(data.message);
                }
            } catch (error) {
                showError('Error al eliminar la cuenta');
            } finally {
                loadingOverlay.classList.add('vanish');
            }
        });
    }

    // Función para mostrar errores
    function showError(message) {
        if (errorModal) {
            const errorMsg = document.getElementById('errorMsg');
            if (errorMsg) errorMsg.textContent = message;
            const bsErrorModal = new bootstrap.Modal(errorModal);
            bsErrorModal.show();
        }
    }
});


/* Logica Front-end */

document.addEventListener('DOMContentLoaded', () => {
    const verifyDeleteModal = new bootstrap.Modal(document.getElementById('verifyDeleteModal'));
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Al hacer clic en Eliminar Cuenta
    document.getElementById('deleteAccountBtn').addEventListener('click', () => {
        verifyDeleteModal.show();
    });

    // Verificación de cuenta
    document.getElementById('verifyDeleteBtn').addEventListener('click', async () => {
        const email = document.getElementById('verifyEmail').value.trim();
        const username = document.getElementById('verifyUsername').value.trim();

        // Reset errores
        document.getElementById('verifyEmailError').style.display = 'none';
        document.getElementById('verifyUsernameError').style.display = 'none';

        if (!email || !username) {
            if (!email) document.getElementById('verifyEmailError').style.display = 'block';
            if (!username) document.getElementById('verifyUsernameError').style.display = 'block';
            return;
        }

        try {
            loadingOverlay.classList.remove('vanish');

            const response = await fetch('../controllers/verifyAccountController.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    username
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.message);
            }

            // Si la verificación es exitosa
            verifyDeleteModal.hide();
            setTimeout(() => {
                deleteModal.show();
            }, 500);

            // Limpiar campos
            document.getElementById('verifyEmail').value = '';
            document.getElementById('verifyUsername').value = '';

        } catch (error) {
            verifyDeleteModal.hide();
            setTimeout(() => {
                document.getElementById('errorMsg').textContent =
                    error.message || 'Los datos ingresados no coinciden con tu cuenta';
                errorModal.show();
                setTimeout  (() => {
                    errorModal.hide();
                    }, 3000);
            }, 100);
        } finally {
            loadingOverlay.classList.add('vanish');
        }
    });

    // Confirmar eliminación
    document.getElementById('confirmDelete').addEventListener('click', async () => {
        try {
            deleteModal.hide();
            loadingOverlay.classList.remove('vanish');

            const response = await fetch('../controllers/deleteAccountController.php', {
                method: 'POST',
                credentials: 'same-origin'
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.message);
            }

            window.location.replace('../../index.php');

        } catch (error) {
            loadingOverlay.classList.add('vanish');
            document.getElementById('errorMsg').textContent =
                error.message || 'Error al eliminar la cuenta';
            errorModal.show();

            setTimeout  (() => {
            errorModal.classList.remove('vanish');
            }, 3000);
        }
    });

    // Limpiar campos al cerrar modal de verificación
    document.getElementById('verifyDeleteModal').addEventListener('hidden.bs.modal', () => {
        document.getElementById('verifyEmail').value = '';
        document.getElementById('verifyUsername').value = '';
        document.getElementById('verifyEmailError').style.display = 'none';
        document.getElementById('verifyUsernameError').style.display = 'none';
    });
});