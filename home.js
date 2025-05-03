document.addEventListener('DOMContentLoaded', () => {
  const couplePhoto = document.querySelector('.couple-photo');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(couplePhoto);
});
