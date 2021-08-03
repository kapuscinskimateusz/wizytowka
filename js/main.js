const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");
  const navListItems = document.querySelectorAll(".nav-list li");

  burger.addEventListener("click", () => {
    navList.classList.toggle("nav-active");

    navListItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navListItemFade 0.3s ease forwards ${index / 6 + 0.3}s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();
