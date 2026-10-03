const glow = document.querySelector('.cursor-glow');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav nav');
window.addEventListener('pointermove', ({ clientX, clientY }) => {
  glow.style.transform = `translate(${clientX - 180}px, ${clientY - 180}px)`;
});
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
