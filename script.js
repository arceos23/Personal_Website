// nav
const menu = document.getElementsByClassName("menu-button")[0];
menu.addEventListener("click", () => {
  if (menu.children.length === 1) {
    menuBtn = document.getElementsByClassName("menu-button")[0];
    menuBtn.innerText = "";
    for (let i = 0; i < 3; i++) {
      const line = document.createElement("span");
      line.classList.toggle("line");
      line.classList.toggle(`line${i}`);
      menuBtn.appendChild(line);
    }
  } else {
    menuBtn = document.getElementsByClassName("menu-button")[0];
    const btnNode = document.createElement("button");
    const textNode = document.createTextNode("X");
    btnNode.appendChild(textNode);
    menuBtn.replaceChildren(btnNode);
  }
  navLinks = document.getElementsByClassName("nav-links");
  navLinks[0].style.marginTop = "180px";
  navLinks[0].style.backgroundColor = "rgb(48, 48, 48, 0.75)";
  navLinks[0].classList.toggle("show");
  for (child of navLinks[0].children) {
    child.classList.toggle("show");
    if (child.tagName == "A") {
      child.classList.toggle("show-link");
    } else if (child.tagName == "BUTTON") {
      child.classList.toggle("show-button");
    }
  }
});

// carousel
function nonNegMod(n, m) {
  return ((n % m) + m) % m;
}

function setSlide(slideNumber) {
  carousel.style.setProperty("--current-slide", slideNumber);
}

function updateSlideIndicators(oldSlideNumber, curSlideNumber) {
  document.querySelector(`[js-slide-indicator${oldSlideNumber}]`).style.backgroundColor = "rgb(58, 58, 58)";
  document.querySelector(`[js-slide-indicator${curSlideNumber}]`).style.backgroundColor = "goldenrod";
}

const carousel = document.querySelector("[js-carousel]");
const slideIndicator0 = document.querySelector("[js-slide-indicator0]");
const slideIndicator1 = document.querySelector("[js-slide-indicator1]");
const slideIndicator2 = document.querySelector("[js-slide-indicator2]");
const buttonPrev = document.querySelector("[js-carousel-button-prev]");
const buttonNext = document.querySelector("[js-carousel-button-next]");
const carouselSlides = document.querySelector("[js-carousel-slides]");
const numSlides = carouselSlides.children.length;
let curSlide = 0;

slideIndicator0.addEventListener("click", () => {
  oldSlide = curSlide;
  curSlide = 0;
  setSlide(curSlide);
  updateSlideIndicators(oldSlide, curSlide);
});
slideIndicator1.addEventListener("click", () => {
  oldSlide = curSlide;
  curSlide = 1;
  setSlide(curSlide);
  updateSlideIndicators(oldSlide, curSlide);
});
slideIndicator2.addEventListener("click", () => {
  oldSlide = curSlide;
  curSlide = 2;
  setSlide(curSlide);
  updateSlideIndicators(oldSlide, curSlide);
});

buttonPrev.addEventListener("click", () => {
  oldSlide = curSlide;
  curSlide = nonNegMod(curSlide - 1, numSlides);
  setSlide(curSlide);
  updateSlideIndicators(oldSlide, curSlide);
});

buttonNext.addEventListener("click", () => {
  oldSlide = curSlide;
  curSlide = nonNegMod(curSlide + 1, numSlides);
  setSlide(curSlide);
  updateSlideIndicators(oldSlide, curSlide);
});
