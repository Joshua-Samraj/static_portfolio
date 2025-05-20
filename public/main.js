/* --- Typing effect --- */
new TypeIt("#typed", {
  strings: [
    "Data Scientist",
    "Data Analyst",
    "Web Developer",
    
    "ML Enthusiast"
  ],
  speed: 100,
  breakLines: false,
  loop: true,
}).go();


/* --- Hamburger --- */
const burger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
burger.addEventListener("click", () => navLinks.classList.toggle("show"));

/* --- Scroll Reveal --- */
ScrollReveal().reveal(".section h2, .card, .skill", {
  distance: "40px",
  duration: 800,
  easing: "ease-out",
  origin: "bottom",
  interval: 100,
});

/* --- Skill bars fill on scroll --- */
const skillsSection = document.getElementById("skills");
const bars = document.querySelectorAll(".bar");
function fillBars() {
  bars.forEach((bar) => {
    const level = bar.dataset.level;
    bar.querySelector
      ? null
      : (bar.style.setProperty("--target", level));
    bar.style.transform = `translateX(calc(${level}% - 100%))`;
    bar.style.transitionDelay = "0.2s";
    bar.style.transform = "translateX(0)";
    bar.style.backgroundPosition = `${level}% 0`;
    bar.style.setProperty("--width", level + "%");
    bar.style.setProperty("--stop", level + "%");
    bar.style.setProperty("--color", "#00adb5");
    bar.style.setProperty("width", level + "%");
    bar.style.setProperty("background", "#00adb5");
    bar.style.setProperty("transition", "width 1.5s ease");
  });
}
let filled = false;
window.addEventListener("scroll", () => {
  const rect = skillsSection.getBoundingClientRect();
  if (!filled && rect.top <= window.innerHeight * 0.75) {
    fillBars();
    filled = true;
  }
});
