export function initCarrusel(interval = 4000) {
  const items = document.querySelectorAll('.item');
  if (items.length === 0) return;

  let currentIndex = 0;

  setInterval(() => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
  }, interval);
}