export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativoanima");
        } else if (section.classList.contains("ativoanima")) {
          section.classList.remove("ativoanima");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", () => {
      animaScroll();
    });
  }
}
