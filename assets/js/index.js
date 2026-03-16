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