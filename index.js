const navSlide = () => {
  const Hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //Toggle Nav
  Hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    Hamburger.classList.toggle('toggle');
  });
};

navSlide();

const currentDate = new Date().getFullYear();
document.querySelector(
  ' footer'
).textContent = `©️ ${currentDate} - Clifford Okpai`;
