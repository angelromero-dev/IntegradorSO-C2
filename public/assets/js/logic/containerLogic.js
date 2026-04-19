/*
 * TechAssist - Sistema de Aprendizaje Interactivo
 * Copyright (c) 2024 TechAssist
 * Autor: Angel Jesús Romero Pérez
 * 
 * Este archivo es parte de TechAssist y está protegido por derechos de autor.
 * Uso no autorizado de este código está prohibido.
 */

let originalCPUCard;
let originalRAMCard;
let originalMotherboardCard;
let originalCaseCard;
let originalPSUCard;
let originalCoolerCard;
let originalGPUCard;
let originalStorageCard;
let originalThermalPasteCard;
let originalAccessoriesCard;
let originalRecommendationsCard;
let originalCuidadosCard;

// CPU
function showCPUContainer(triggerElement) {
  const container = document.getElementById("containerCPU");
  const card = triggerElement.closest(".card");

  originalCPUCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetCPU() {
  const container = document.getElementById("containerCPU");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalCPUCard) {
      originalCPUCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// RAM
function showRAMContainer(triggerElement) {
  const container = document.getElementById("containerRAM");
  const card = triggerElement.closest(".card");

  originalRAMCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetRAM() {
  const container = document.getElementById("containerRAM");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalRAMCard) {
      originalRAMCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// Motherboard
function showMotherboardContainer(triggerElement) {
  const container = document.getElementById("containerMotherboard");
  const card = triggerElement.closest(".card");

  originalMotherboardCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetMotherboard() {
  const container = document.getElementById("containerMotherboard");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalMotherboardCard) {
      originalMotherboardCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// Case
function showCaseContainer(triggerElement) {
  const container = document.getElementById("containerCase");
  const card = triggerElement.closest(".card");

  originalCaseCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetCase() {
  const container = document.getElementById("containerCase");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalCaseCard) {
      originalCaseCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// PSU
function showPSUContainer(triggerElement) {
  const container = document.getElementById("containerPSU");
  const card = triggerElement.closest(".card");

  originalPSUCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetPSU() {
  const container = document.getElementById("containerPSU");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalPSUCard) {
      originalPSUCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// Cooler
function showCoolerContainer(triggerElement) {
  const container = document.getElementById("containerCooler");
  const card = triggerElement.closest(".card");

  originalCoolerCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetCooler() {
  const container = document.getElementById("containerCooler");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalCoolerCard) {
      originalCoolerCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// GPU
function showGPUContainer(triggerElement) {
  const container = document.getElementById("containerGPU");
  const card = triggerElement.closest(".card");

  originalGPUCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetGPU() {
  const container = document.getElementById("containerGPU");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalGPUCard) {
      originalGPUCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// Storage
function showStorageContainer(triggerElement) {
  const container = document.getElementById("containerStorage");
  const card = triggerElement.closest(".card");

  originalStorageCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetStorage() {
  const container = document.getElementById("containerStorage");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalStorageCard) {
      originalStorageCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// ThermalPaste
function showThermalPasteContainer(triggerElement) {
  const container = document.getElementById("containerThermalPaste");
  const card = triggerElement.closest(".card");

  originalThermalPasteCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetThermalPaste() {
  const container = document.getElementById("containerThermalPaste");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalThermalPasteCard) {
      originalThermalPasteCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// Accessories
function showAccessoriesContainer(triggerElement) {
  const container = document.getElementById("containerAccessories");
  const card = triggerElement.closest(".card");

  originalAccessoriesCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetAccessories() {
  const container = document.getElementById("containerAccessories");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalAccessoriesCard) {
      originalAccessoriesCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// Recommendations
function showRecommendationsContainer(triggerElement) {
  const container = document.getElementById("containerRecommendations");
  const card = triggerElement.closest(".card");

  originalRecommendationsCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetRecommendations() {
  const container = document.getElementById("containerRecommendations");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalRecommendationsCard) {
      originalRecommendationsCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}

// Cuidados
function showCuidadosContainer(triggerElement) {
  const container = document.getElementById("containerCuidados");
  const card = triggerElement.closest(".card");

  originalCuidadosCard = card;
  card.style.display = "none";
  container.style.display = "block";

  requestAnimationFrame(() => {
    container.classList.remove("hiding");
  });

  container.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function resetCuidados() {
  const container = document.getElementById("containerCuidados");

  container.classList.add("hiding");

  setTimeout(() => {
    if (originalCuidadosCard) {
      originalCuidadosCard.style.display = "block";
    }
    container.style.display = "none";
  }, 500);
}
