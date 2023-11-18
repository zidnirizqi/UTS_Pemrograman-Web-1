// JavaScript untuk efek parallax pada gambar header
document.addEventListener("scroll", function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;
  
  header.style.backgroundPositionY = -scrollPosition * 0.3 + 'px'; // Sesuaikan kecepatan efek parallax
});

// JavaScript untuk menangani efek gambar ketika di-klik
document.addEventListener("DOMContentLoaded", function() {
  const profileImage = document.getElementById('profileImage');

  profileImage.addEventListener('click', function() {
      this.style.transform = 'scale(1.2)';
  });

  profileImage.addEventListener('dblclick', function() {
      this.style.transform = 'scale(1)';
  });
});
