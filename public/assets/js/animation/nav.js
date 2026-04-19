
window.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var prevScrollpos = window.pageYOffset;

  window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      navbar.classList.remove('navbar-hidden');
    } else {
      if (currentScrollPos > navbar.offsetHeight) {
        navbar.classList.add('navbar-hidden');
      }
    }

    prevScrollpos = currentScrollPos;
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      this.classList.add('active');
    });
  });
});