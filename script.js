const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn?.querySelector("i");
const cursor = document.querySelector(".cursor");
const revealTargets = document.querySelectorAll("section, .hero-image, .hero-text, .glass, .card, .org-card, .project-card, .contact-box, .highlight-box");

if (themeBtn) {
themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");

if (themeIcon) {
const isDark = document.body.classList.contains("dark");
themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
}
});
}

if (cursor) {
window.addEventListener("mousemove", (event) => {
cursor.style.left = `${event.clientX}px`;
cursor.style.top = `${event.clientY}px`;
});

document.querySelectorAll("a, button, .project-card, .card, .org-card, .contact-box").forEach((element) => {
element.addEventListener("mouseenter", () => document.body.classList.add("cursor-active"));
element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-active"));
});
}

revealTargets.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("is-visible");
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.16,
});

revealTargets.forEach((element) => observer.observe(element));