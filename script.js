
document.getElementById("open-invitation").addEventListener("click", function () {
  document.getElementById("hero").style.display = "none";
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});

function revealPhotoOnScroll() {
  const photo = document.querySelector('.couple-photo');
  if (!photo) return;

  const rect = photo.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

  if (isVisible && !photo.classList.contains('visible')) {
    photo.classList.add('visible');
    window.removeEventListener('scroll', revealPhotoOnScroll);
  }
}

window.addEventListener('scroll', revealPhotoOnScroll);
