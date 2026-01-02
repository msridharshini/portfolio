// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "🌙";
    } else {
        toggleBtn.textContent = "☀";
    }
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close nav when a link is clicked (mobile)
    navLinks.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('nav-link')) {
            navLinks.classList.remove('open');
        }
    });
}

// Animate skill bars and GPA bar on scroll into view
const skills = document.querySelectorAll(".skill-level");
const gpaBar = document.querySelector(".gpa-progress");

function animateBars() {
    // Animate GPA bar
    if (gpaBar && isElementInViewport(gpaBar)) {
        gpaBar.style.width = gpaBar.style.getPropertyValue("--progress") || "80%";
    }
    // Animate skill bars
    skills.forEach((skill) => {
        if (isElementInViewport(skill)) {
            skill.style.width = skill.style.getPropertyValue("--level");
        }
    });
}

// Utility: Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

window.addEventListener("scroll", animateBars);

// Contact form submission (dummy example)
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
        formMessage.textContent =
            "Thanks for reaching out! I'll get back to you soon.";
        formMessage.style.color = "green";
        form.reset();
    } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
    }
});