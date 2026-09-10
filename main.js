document.addEventListener("DOMContentLoaded", () => {
  const heroPictures = document.querySelectorAll(".hero picture");
  const articles = document.querySelectorAll(".article-principale");
  const menu = document.getElementById("menu-principal");

  const prevBtn = document.querySelector(
    '.hero-nav button[aria-label="image précédente"]',
  );
  const nextBtn = document.querySelector(
    '.hero-nav button[aria-label="image suivante"]',
  );
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");

  let currentIndex = 0;
  const totalSlides = heroPictures.length;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    heroPictures.forEach((picture, i) => {
      if (i === currentIndex) {
        picture.classList.add("active");
      } else {
        picture.classList.remove("active");
      }
    });

    articles.forEach((article, i) => {
      if (i === currentIndex) {
        article.classList.add("active");
      } else {
        article.classList.remove("active");
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      showSlide(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      showSlide(currentIndex + 1);
    }
  });

  showSlide(0);

  openMenu.addEventListener("click", () => {
    menu.classList.add("open")
    openMenu.setAttribute("aria-expended", "true");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("open");
    openMenu.setAttribute("aria-expended", "false");
  });
});
