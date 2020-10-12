const ham = document.querySelector(".hamburger")
const headerjon = document.querySelector(".site-header")

ham.addEventListener("click", toggleHamburger)

function toggleHamburger() {
  headerjon.classList.toggle("site-header--open")
}
 