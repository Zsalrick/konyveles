const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
  revealCards();
  setActiveNavLink(); // Ezt a funkciót is a görgetéshez kell igazítani
};

scrollBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- CARD ANIMÁCIÓ ---
const cards = document.querySelectorAll('.card');

function revealCards() {
  const windowHeight = window.innerHeight;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 50) {
      card.classList.add('show');
    }
  });
}

// Betöltéskor is animál
window.addEventListener('load', revealCards);

// FAQ működés
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
    answer.classList.toggle('open');
  });
});

// Email cím védése spamekkel szemben
document.addEventListener('DOMContentLoaded', function() {
  const email = 'kiss01adam77' + '@' + 'gmail.com';
  const emailLink = document.querySelector('a[href^="mailto:"]');

  if (emailLink) {
    emailLink.setAttribute('href', 'mailto:' + email);
    emailLink.querySelector('strong').textContent = email;
  }
});

// Navigációs menü működése
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav ul');
const navLinks = document.querySelectorAll('.main-nav a');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
}

// Aktív menüpont beállítása görgetéskor
const sections = document.querySelectorAll('section, .comparison-section, .faq-container');

function setActiveNavLink() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= (sectionTop - 100)) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
}

// Görgetés esemény figyelése
window.addEventListener('scroll', setActiveNavLink);

// Menü bezárása kattintáskor (mobil)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });
});