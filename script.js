const glow = document.querySelector('.cursor-glow');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav nav');
const progressBar = document.querySelector('#progress-bar');

const updateReadingProgress = () => {
  const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableDistance > 0 ? window.scrollY / scrollableDistance : 0;
  progressBar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
};

updateReadingProgress();
window.addEventListener('scroll', updateReadingProgress, { passive: true });
window.addEventListener('resize', updateReadingProgress);
window.addEventListener('pointermove', ({ clientX, clientY }) => {
  glow.style.transform = `translate(${clientX - 180}px, ${clientY - 180}px)`;
});
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
