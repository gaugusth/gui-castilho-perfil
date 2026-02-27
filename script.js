// Animar barras ao carregar
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.skill-fill').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 400);
});

// Toggle tema
const btn = document.getElementById('toggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀';
});


// Toggle idioma
let currentLang = 'pt';
const langBtn = document.getElementById('lang');

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  langBtn.textContent = currentLang === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN';

  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});