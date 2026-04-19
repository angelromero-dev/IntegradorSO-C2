/*
 * TechAssist - Sistema de Aprendizaje Interactivo
 * Copyright (c) 2024 TechAssist
 * Autor: Angel Jesús Romero Pérez
 * 
 * Este archivo es parte de TechAssist y está protegido por derechos de autor.
 * Uso no autorizado de este código está prohibido.
 */

let userNivel
let nivelContainer = document.getElementById('userLevel')

const getNivel = async () => {
  try {
    const response = await fetch('../../app/controllers/userLevel.php')
    const data = await response.json()
    userNivel = data.userLevel
    handleNivel()
  } catch (error) {
    console.error('Error:', error)
  }
}

const handleNivel = () => {
  const niveles = {
    1: 'principiante',
    2: 'promedio', 
    3: 'experto'
  }

  const nivel = niveles[userNivel]

  // Caso 1: Elementos con clase base
  const imgsClase = document.querySelectorAll('.img_base') 
  const textosClase = document.querySelectorAll('.texto_base')
  const contsClase = document.querySelectorAll('.contenedor_base')

  // Caso 2: Elementos con ID base
  const imgsId = document.querySelectorAll('#img_base') 
  const textosId = document.querySelectorAll('#texto_base')
  const contsId = document.querySelectorAll('#cont_base')

  // Ocultar todo primero
  imgsClase.forEach(img => img.style.display = 'none')
  textosClase.forEach(texto => texto.style.display = 'none')
  contsClase.forEach(cont => cont.style.display = 'none')
  
  imgsId.forEach(img => img.style.display = 'none')
  textosId.forEach(texto => texto.style.display = 'none')
  contsId.forEach(cont => cont.style.display = 'none')

  switch(nivel) {
    case 'principiante':
      // Caso 1: Checar IDs de nivel
      imgsClase.forEach(img => {
        if(img.id.includes('principiante')) img.style.display = 'block'
      })
      textosClase.forEach(texto => {
        if(texto.id.includes('principiante')) texto.style.display = 'block'
      })
      contsClase.forEach(cont => {
        if(cont.id.includes('principiante')) cont.style.display = 'block'
      })

      // Caso 2: Checar clases de nivel
      imgsId.forEach(img => {
        if(img.classList.contains('nivel_principiante')) img.style.display = 'block'
      })
      textosId.forEach(texto => {
        if(texto.classList.contains('nivel_principiante')) texto.style.display = 'block'
      })
      contsId.forEach(cont => {
        if(cont.classList.contains('nivel_principiante')) cont.style.display = 'block'
      })
      break

    case 'promedio':
      // Caso 1: Checar IDs de nivel
      imgsClase.forEach(img => {
        if(img.id.includes('promedio')) img.style.display = 'block'
      })
      textosClase.forEach(texto => {
        if(texto.id.includes('promedio')) texto.style.display = 'block'
      })
      contsClase.forEach(cont => {
        if(cont.id.includes('promedio')) cont.style.display = 'block'
      })

      // Caso 2: Checar clases de nivel
      imgsId.forEach(img => {
        if(img.classList.contains('nivel_promedio')) img.style.display = 'block'
      })
      textosId.forEach(texto => {
        if(texto.classList.contains('nivel_promedio')) texto.style.display = 'block'
      })
      contsId.forEach(cont => {
        if(cont.classList.contains('nivel_promedio')) cont.style.display = 'block'
      })
      break

    case 'experto':
      // Caso 1: Checar IDs de nivel
      imgsClase.forEach(img => {
        if(img.id.includes('experto')) img.style.display = 'block'
      })
      textosClase.forEach(texto => {
        if(texto.id.includes('experto')) texto.style.display = 'block'
      })
      contsClase.forEach(cont => {
        if(cont.id.includes('experto')) cont.style.display = 'block'
      })

      // Caso 2: Checar clases de nivel
      imgsId.forEach(img => {
        if(img.classList.contains('nivel_experto')) img.style.display = 'block'
      })
      textosId.forEach(texto => {
        if(texto.classList.contains('nivel_experto')) texto.style.display = 'block'
      })
      contsId.forEach(cont => {
        if(cont.classList.contains('nivel_experto')) cont.style.display = 'block'
      })
      break
  }
}

document.addEventListener('DOMContentLoaded', getNivel)