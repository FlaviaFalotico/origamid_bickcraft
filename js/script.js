// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  const url = location.href;
  const href = link.href;

  // Método de string includes para verificar seoutra string é contida nela (retornando true ou false)
  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

// Ativar Items do Orçamento

const parameters = new URLSearchParams(location.search);

function activeProducts(params) {
   const element = document.getElementById(params);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activeProducts);

// Perguntas Frequentes
const questions = document.querySelectorAll(".questions button");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function eventsQuestions(question) {
  question.addEventListener("click", activeQuestion);
}

questions.forEach(eventsQuestions);

// Galeria de Imagens - Bikcraft

const images = document.querySelectorAll(".bicycle-images img");
const galleryContainer = document.querySelector(".bicycle-images");

function changeImage(event) {
  const img = event.currentTarget;
  //verifiacar o tamanho da tela, para que a partir de um tamanho não realizar a mudança.
  const media = matchMedia("(min-width: 1000px)").matches; //matches - verifica o tamanho (boolean)
  if (media) {
    galleryContainer.prepend(img); //método para remover o elemento de uma posição e colocar em outra.
  }
}

function eventGallery(img) {
  img.addEventListener("click", changeImage);
}

images.forEach(eventGallery);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
