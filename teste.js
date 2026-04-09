// SCROLL SUAVE
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// NAVBAR DINÂMICA AO SCROLL
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if(window.scrollY > 50) nav.classList.add('shadow', 'bg-dark');
  else nav.classList.remove('shadow');
});

// ANIMAÇÃO AO SURGIR
const elements = document.querySelectorAll('.box, .img-box');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{ threshold: 0.2 });
elements.forEach(el => observer.observe(el));

// EFEITO HOVER SUAVE NAS IMAGENS
document.querySelectorAll('.img-box').forEach(img => {
  img.addEventListener('mousemove', e => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    img.style.transform = `scale(1.05) rotateX(${(y-rect.height/2)/20}deg) rotateY(${-(x-rect.width/2)/20}deg)`;
  });
  img.addEventListener('mouseleave', () => img.style.transform='scale(1)');
});

// TEXTO DIGITANDO
const title = document.querySelector('.hero h1');
const text = "Charlie Brown Jr";
let index = 0;
title.textContent = "";
function typeEffect() {
  if(index < text.length){
    title.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
window.addEventListener('load', typeEffect);