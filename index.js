const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
  
  revealCards();
  setActiveNavLink();
};

scrollBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

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

window.addEventListener('load', revealCards);

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
    answer.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const email = 'info@kissadamev.hu';
  const emailLink = document.querySelector('a[data-email]');

  if (emailLink) {
    emailLink.setAttribute('href', 'mailto:' + email);
    emailLink.querySelector('strong').textContent = email;
  }
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav ul');
const navLinks = document.querySelectorAll('.main-nav a');
const mainNav = document.querySelector('.main-nav');
const header = document.querySelector('header');
const headerEnd = header.offsetHeight - 50;

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
    if (navMenu.classList.contains('open')) {
      mainNav.classList.add('scrolled');
    } else {
      if (window.scrollY < headerEnd) {
        mainNav.classList.remove('scrolled');
      }
    }
  });
}

// Új kód hozzáadása ide
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
      if (window.scrollY < headerEnd) {
        mainNav.classList.remove('scrolled');
      }
    }
  });
});

const sections = document.querySelectorAll('section, .comparison-section, .faq-container');

function setActiveNavLink() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= (sectionTop - 200)) {
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

window.addEventListener('scroll', () => {
  if (window.matchMedia('(max-width: 900px)').matches) {
    if (window.scrollY >= headerEnd) {
      mainNav.classList.add('scrolled');
    } else {
      if (!navMenu.classList.contains('open')) {
        mainNav.classList.remove('scrolled');
      }
    }
  } else {
    if (window.scrollY >= headerEnd) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  }

  setActiveNavLink();
});

setActiveNavLink();