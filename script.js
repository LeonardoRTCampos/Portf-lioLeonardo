import linkInterno from "./modules/scroll-suaves.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";

linkInterno();
initAnimacaoScroll();

const qseExtra = document.querySelector(".qse-texto-extra");
const buttonExtra = document.querySelector(".container-qse-texto button");
const imgExtra = document.querySelector(".container-qse-imgextra");
const fotoExtra = document.querySelector(".imgExtraAbaixoPrincipal");

//console.log(qseExtra, buttonExtra, imgExtra);

buttonExtra.addEventListener("click", (event) => {
  qseExtra.classList.toggle("ativo");
  imgExtra.classList.toggle("imgExtraAtivo");
  fotoExtra.classList.toggle("ativoImgExtra");
  buttonExtra.classList.toggle("toggleButton");
  buttonToggle();
});

function buttonToggle() {
  if (buttonExtra.classList.value === "toggleButton") {
    console.log(buttonExtra.classList.value);
    buttonExtra.innerHTML = "Saiba Menos &#11181";
  } else {
    buttonExtra.innerHTML = "Saiba Mais &#11183";
  }
}

// Aprensetacao Slide

const slideGeral = document.querySelector(".apresentacaoSlide");
const buttonAbrir = document.querySelector(".port-slide");
const buttonFechar = document.querySelector(".buttonFechar");
const slidesAll = document.querySelectorAll(".caixaApresentacao");

buttonAbrir.addEventListener("click", () => {
  slideGeral.style.display = "flex";
});

buttonFechar.addEventListener("click", () => {
  slideGeral.style.display = "none";
});
