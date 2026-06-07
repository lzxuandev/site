const sections = document.querySelectorAll('.blog-content > *');
sections.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  setTimeout(() => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 100 + i * 80);
});
