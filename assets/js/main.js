/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    console.log("click disparado");
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*=============== SERVICES MODAL ===============*/

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});
/* Link active work */
const linkWork = document.querySelectorAll(".work__item");
function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("acitve-work");
}
/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*=============== LIGHT DARK THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset: true,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {delay: 700});
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: "bottom"});
