const scrollBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
      revealCards(); // görgetéskor is ellenőrzi a láthatóságot
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