const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

const year = new Date().getFullYear();
const footer = document.createElement('p');
footer.className = 'footer-note';
footer.textContent = `Lumyn · ${year}`;

const contactCard = document.querySelector('.contact-card');
if (contactCard) {
  contactCard.appendChild(footer);
}
