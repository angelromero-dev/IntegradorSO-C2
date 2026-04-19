/*
 * TechAssist - Sistema de Aprendizaje Interactivo
 * Copyright (c) 2024 TechAssist
 * Autor: Angel Jesús Romero Pérez
 * 
 * Este archivo es parte de TechAssist y está protegido por derechos de autor.
 * Uso no autorizado de este código está prohibido.
 */
  const sliders = [...document.querySelectorAll(".object__body")];
  const buttonNext = document.querySelector("#next");
  const buttonBefore = document.querySelector("#before");
  let value;
  let autoSlideInterval = 8000;
  let autoSlideIntervalId;

  buttonNext.addEventListener("click", () => {
    changePosition(1);
    resetAutoSlideTimer();
  });

  buttonBefore.addEventListener("click", () => {
    changePosition(-1);
    resetAutoSlideTimer();
  });

  const changePosition = (add) => {
    const currentObject = document.querySelector(".object__body--show").dataset
      .id;
    value = Number(currentObject);
    value += add;

    sliders[Number(currentObject) - 1].classList.remove("object__body--show");
    if (value === sliders.length + 1 || value === 0) {
      value = value === 0 ? sliders.length : 1;
    }

    sliders[value - 1].classList.add("object__body--show");
  };

  const resetAutoSlideTimer = () => {
    clearInterval(autoSlideIntervalId);
    autoSlideIntervalId = setInterval(() => {
      changePosition(1);
    }, autoSlideInterval);
  };

  resetAutoSlideTimer();








