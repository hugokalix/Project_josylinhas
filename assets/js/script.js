
const menuHambButton = document.querySelector(".menu-hamb-button")
const navBarLinks = document.querySelector(".navbar-links")
const menuOverlay = document.querySelector(".menu-overlay")

menuHambButton.addEventListener("click", () => {
  menuHambButton.classList.toggle("isOpen")
  navBarLinks.classList.toggle("show")
  menuOverlay.classList.toggle("show")
})

menuOverlay.addEventListener("click", () => {
  menuHambButton.classList.remove("isOpen")
  navBarLinks.classList.remove("show")
  menuOverlay.classList.remove("show")
})


// Scroll storytelling
document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const section = document.querySelector(".scroll-section");
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const windowHeight = window.innerHeight;

  const progress = (scrollY - sectionTop) / (sectionHeight - windowHeight);

  const topics = document.querySelectorAll(".topic");
  topics.forEach(t => t.classList.remove("active"));

  const container = document.querySelector(".scroll-container");

  if (progress < 0.33) {
    document.getElementById("topic1").classList.add("active");
    container.style.backgroundColor = "#fff";

    // cores dos textos quando fundo é branco
    document.querySelector("#topic1 h2").style.color = "#733122";
    document.querySelector("#topic1 p").style.color = "#32498C";
    document.querySelector("#topic1 .icon i").style.color = "#733122";

  } else if (progress < 0.66) {
    document.getElementById("topic2").classList.add("active");
    container.style.backgroundColor = "#733122";

    // cores dos textos quando fundo é marrom
    document.querySelector("#topic2 h2").style.color = "#fff";
    document.querySelector("#topic2 p").style.color = "#F6F3F2";
    document.querySelector("#topic2 .icon i").style.color = "#fff";

  } else {
    document.getElementById("topic3").classList.add("active");
    container.style.backgroundColor = "#32498C";

    // cores dos textos quando fundo é azul
    document.querySelector("#topic3 h2").style.color = "#fff";
    document.querySelector("#topic3 p").style.color = "#E7D7C1";
    document.querySelector("#topic3 .icon i").style.color = "#fff";
  }
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 5000 },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  effect: "fade" 
});

