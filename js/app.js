const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu)

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function show() {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("screen").classList.remove("hidden");
}
function hide() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("screen").classList.add("hidden");
}

function show2() {
  document.getElementById("modal2").classList.remove("hidden");
  document.getElementById("screen2").classList.remove("hidden");
}
function hide2() {
  document.getElementById("modal2").classList.add("hidden");
  document.getElementById("screen2").classList.add("hidden");

}

window.onclick = e => {
  if (e.target.id === "screen"||e.target.id === "screen2") {
    hide();
    hide2();
    return;
  }
}