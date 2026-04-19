/*
 * TechAssist - Sistema de Aprendizaje Interactivo
 * Copyright (c) 2024 TechAssist
 * Autor: Angel Jesús Romero Pérez
 * 
 * Este archivo es parte de TechAssist y está protegido por derechos de autor.
 * Uso no autorizado de este código está prohibido.
 */

let accountDataModal;
let historyModal;
let errorModal;

// Función de inicialización
function initializeModals() {
   try {
       accountDataModal = new bootstrap.Modal(document.getElementById('accountDataModal'));
       historyModal = new bootstrap.Modal(document.getElementById('historyModal'));
       errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
   } catch (error) {
       console.error('Error inicializando modales:', error);
   }
}

// Función para mostrar errores
function showError(message) {
   const errorMsg = document.getElementById('errorMsg');
   if (errorMsg) {
       errorMsg.textContent = message;
       errorModal.show();
   }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
   // Inicializar modales
   initializeModals();

   // Botón de datos de cuenta
   const accountDataBtn = document.getElementById('showAccountData');
   if (accountDataBtn) {
       accountDataBtn.addEventListener('click', (e) => {
           e.preventDefault();
           loadAccountData();
       });
   }

   // Botón de historial
   const historyBtn = document.getElementById('showHistory');
   if (historyBtn) {
       historyBtn.addEventListener('click', (e) => {
           e.preventDefault();
           loadHistory();
       });
   }
});

// Cargar datos de la cuenta
async function loadAccountData() {
   const loadingOverlay = document.getElementById('loadingOverlay');
   if (loadingOverlay) loadingOverlay.classList.remove('vanish');

   try {
       const response = await fetch('../controllers/getAccountInfo.php');
       const data = await response.json();
       
       if (data.error) {
           throw new Error(data.message);
       }

       // Actualizar campos
       document.getElementById('accountUsername').textContent = data.username || 'No disponible';
       document.getElementById('accountEmail').textContent = data.email || 'No disponible';
       document.getElementById('accountLevel').textContent = getLevelText(data.nivel);
       document.getElementById('accountRegDate').textContent = formatCompleteDate(data.fecha_registro);
       document.getElementById('accountLastLogin').textContent = formatCompleteDate(data.ultima_sesion);

       accountDataModal.show();

   } catch (error) {
       console.error('Error:', error);
       showError('Error al cargar datos de la cuenta');
   } finally {
       if (loadingOverlay) loadingOverlay.classList.add('vanish');
   }
}

// Cargar historial
async function loadHistory() {
   const loadingOverlay = document.getElementById('loadingOverlay');
   if (loadingOverlay) loadingOverlay.classList.remove('vanish');

   try {
       const response = await fetch('../controllers/getHistory.php');
       const data = await response.json();
       
       if (data.error) {
           throw new Error(data.message);
       }

       const tbody = document.getElementById('historyTableBody');
       tbody.innerHTML = '';

       let lastDate = '';

       data.forEach(item => {
           const date = new Date(item.fecha_cambio);
           const currentDate = formatDateHeader(date);

           if (currentDate !== lastDate) {
               const dateRow = document.createElement('tr');
               dateRow.className = 'table-light date-separator';
               dateRow.innerHTML = `
                   <td colspan="4" class="text-center">
                       <strong>${currentDate}</strong>
                   </td>
               `;
               tbody.appendChild(dateRow);
               lastDate = currentDate;
           }

           const row = document.createElement('tr');
           row.className = getEventClass(item.evento_tipo);
           row.innerHTML = `
               <td class="text-nowrap">${formatTime(date)}</td>
               <td>
                   <div class="d-flex align-items-center">
                       ${getEventIcon(item.evento_tipo)}
                       <span class="ms-2 text-wrap">${item.descripcion_formateada}</span>
                   </div>
               </td>
               <td class="text-truncate">${item.dispositivo || 'No disponible'}</td>
               <td class="text-truncate">${item.navegador || 'No disponible'}</td>
           `;
           tbody.appendChild(row);
       });

       historyModal.show();

   } catch (error) {
       console.error('Error:', error);
       showError('Error al cargar historial');
   } finally {
       if (loadingOverlay) loadingOverlay.classList.add('vanish');
   }
}

// Funciones auxiliares
function getLevelText(nivel) {
   const levels = {
       1: 'Principiante',
       2: 'Promedio', 
       3: 'Experto'
   };
   return levels[nivel] || 'No definido';
}

function formatCompleteDate(dateStr) {
   if (!dateStr) return 'No disponible';
   
   try {
       const date = new Date(dateStr);
       return date.toLocaleDateString('es-ES', {
           weekday: 'long',
           year: 'numeric',
           month: 'long',
           day: 'numeric',
           hour: '2-digit',
           minute: '2-digit'
       }).replace(/^\w/, c => c.toUpperCase());
   } catch (e) {
       return dateStr;
   }
}

function formatDateHeader(date) {
   const options = {
       weekday: 'long',
       year: 'numeric',
       month: 'long',
       day: 'numeric'
   };
   
   return date.toLocaleDateString('es-ES', options)
       .replace(/^\w/, c => c.toUpperCase());
}

function formatTime(date) {
   return date.toLocaleDateString('es-ES', {
       weekday: 'long',
       year: 'numeric',
       month: 'long',
       day: 'numeric',
       hour: '2-digit',
       minute: '2-digit'
   }).replace(/^\w/, c => c.toUpperCase());
}

function formatDateWithTime(date) {
   const formattedDate = date.toLocaleDateString('es-ES', {
       year: 'numeric',
       month: 'long',
       day: 'numeric'
   });
   
   const formattedTime = date.toLocaleTimeString('es-ES', {
       hour: '2-digit',
       minute: '2-digit'
   });

   return `${formattedDate} a las ${formattedTime}`;
}

function getEventClass(tipo) {
   const classes = {
       'cookie': 'table-info',
       'login': 'table-success',
       'logout': 'table-warning',
       'default': ''
   };
   return classes[tipo] || classes.default;
}

function getEventIcon(tipo) {
   const iconBase = '<i class="bi';
   const icons = {
       'cookie': `${iconBase} bi-shield-check text-info"></i>`,
       'login': `${iconBase} bi-box-arrow-in-right text-success"></i>`,
       'logout': `${iconBase} bi-box-arrow-right text-warning"></i>`,
       'default': `${iconBase} bi-circle"></i>`
   };
   return icons[tipo] || icons.default;
}