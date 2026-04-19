/*
 * TechAssist - Sistema de Aprendizaje Interactivo
 * Copyright (c) 2024 TechAssist
 * Autor: Angel Jesús Romero Pérez
 * 
 * Este archivo es parte de TechAssist y está protegido por derechos de autor.
 * Uso no autorizado de este código está prohibido.
 */

document.addEventListener('DOMContentLoaded', function() {
    const userLevelElement = document.getElementById('userLevel');

    fetch('../../app/controllers/userLevel.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            const userLevel = data.userLevel;

            if (userLevelElement) {
                // Mapear nivel a texto
                const levelText = {
                    1: 'Principiante',
                    2: 'Promedio',
                    3: 'Experto'
                }[userLevel] || 'No definido';

                userLevelElement.textContent = `Nivel: ${levelText}`;
                
                // Aplicar clases según nivel
                userLevelElement.classList.add(`level-${userLevel}`);
            }

            // Solo si necesitas debug, descomenta la siguiente línea
             console.log(`Nivel de usuario: ${userLevel}`); 
        })
        .catch(error => {
            // Solo registrar errores reales
            if (error.message !== 'Error en la solicitud') {
                console.error('Error:', error);
            }
        });
});