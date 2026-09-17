/* =======================================================
   BRISA CAFÉ — script.js
   No hay backend: este archivo solo maneja interacciones
   en el navegador (menú móvil, año del footer y un envío
   de formulario simulado).
   ======================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  setFooterYear();
  initContactForm();
});

/* Menú móvil: abre/cierra y se cierra al elegir un enlace */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Año actual en el footer */
function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* Formulario de contacto: sin backend, solo valida y
   muestra un mensaje de confirmación en pantalla. */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Por favor completa todos los campos.";
      status.style.color = "#B23A3A";
      return;
    }

    const name = form.querySelector("#name").value.trim();
    status.textContent = `Gracias, ${name}. Te responderemos pronto.`;
    status.style.color = "";
    form.reset();
  });
}
