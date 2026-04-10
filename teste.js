// SCROLL SUAVE (corrigido)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');

    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// NAVBAR DINÂMICA AO SCROLL
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.classList.add('shadow', 'bg-dark');
  } else {
    nav.classList.remove('shadow', 'bg-dark');
  }
});

// ANIMAÇÃO AO SURGIR
const elements = document.querySelectorAll('.box, .img-box, .album-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// HOVER SUAVE (melhorado sem bug de travar)
document.querySelectorAll('.img-box').forEach(img => {
  img.addEventListener('mousemove', e => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    img.style.transform = `
      scale(1.05)
      rotateX(${(y - rect.height / 2) / 20}deg)
      rotateY(${-(x - rect.width / 2) / 20}deg)
    `;
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

// TYPING EFFECT (corrigido para não quebrar se elemento não existir)
window.addEventListener('load', () => {
  const title = document.querySelector('.hero h1');

  if (!title) return;

  const text = "Charlie Brown Jr";
  let index = 0;

  title.textContent = "";

  function typeEffect() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 80);
    }
  }

  typeEffect();
});

// efeito hover mais “vivo” estilo app moderno
document.querySelectorAll('.album-card, .box').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = '0.2s';
  });

  card.addEventListener('mousemove', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    card.style.transform = `
      perspective(800px)
      rotateX(${(y - 50) / 20}deg)
      rotateY(${-(x - 50) / 20}deg)
      scale(1.03)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
  });
});