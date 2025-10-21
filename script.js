// ======== MENU MOBILE ==========
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    // Garante que o 'this' dentro do evento se refira à classe
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

// Instancia a classe para o menu mobile
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();


// ======== FORMULÁRIO ==========
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#number"); // <== estava faltando essa linha!

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Verifica se o nome está vazio
  if (nameInput.value.trim() === "") {
    alert("Por favor, preencha o seu nome.");
    return;
  }

  // Verifica se o e-mail está preenchido e se é válido
  if (emailInput.value.trim() === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha um e-mail válido.");
    return;
  }

  // Verifica se o número está preenchido e se é válido
  if (numberInput.value.trim() === "" || !validateNumber(numberInput.value)) {
    alert("Por favor, insira um número válido (somente números).");
    return;
  }

  // Se tudo estiver certo, envia o formulário
  form.submit();
});


// ======== FUNÇÃO DE VALIDAÇÃO DE EMAIL ==========
function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}


// ======== FUNÇÃO DE VALIDAÇÃO DE NÚMERO ==========
function validateNumber(number) {
  const numberRegex = /^[0-9]{8,15}$/; // aceita números com 8 a 15 dígitos
  return numberRegex.test(number);
}
