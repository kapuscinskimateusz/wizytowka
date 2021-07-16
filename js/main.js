const buttonUp = document.querySelector("button.up");

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight) buttonUp.classList.add("active");
  else buttonUp.classList.remove("active");
});

buttonUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// section.about

const header = document.querySelector("header");
const sectionAboutImg = document.querySelector("section.about div:first-child");
const sectionAboutText = document.querySelector("section.about div:last-child");

window.addEventListener("scroll", () => {
  if (window.scrollY >= header.clientHeight / 2) {
    sectionAboutImg.style.transform = "translateX(0)";
    sectionAboutText.style.transform = "translateX(0)";
  }
});
