// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});

// Scroll Progress
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    document.getElementById("progress").style.width = (scroll / height * 100) + "%";
});

// // Theme toggle
// const themeBtn = document.getElementById("themeBtn");
// themeBtn?.addEventListener("click", () => document.body.classList.toggle("light"));

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));

// Fill mobile menu
const navLinks = document.querySelectorAll(".navbar ul li a");
navLinks.forEach(link => {
    const a = link.cloneNode(true);
    a.addEventListener("click", () => mobileMenu.classList.remove("active"));
    mobileMenu.appendChild(a);
});

// Typing effect
const phrases = ["Frontend Developer", "UI/UX Designer", "Creative Coder","Photoshop"];
let i = 0, j = 0, current = "", isDeleting = false;
const typingEl = document.querySelector(".typing");
function type() {
    if (!typingEl) return;
    if (!isDeleting && j < phrases[i].length) {
        current += phrases[i][j];
        j++;
    } else if (isDeleting && j > 0) {
        current = current.slice(0, j - 1);
        j--;
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % phrases.length;
    }
    typingEl.textContent = current;
    setTimeout(type, isDeleting ? 50 : 150);
}
type();

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) el.classList.add("active");
    });
});


