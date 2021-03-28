const toggleEl = document.querySelector('.toggle-container');
const prices = document.querySelectorAll('.sub-price');
const frequency = document.querySelectorAll('.sub-freq');
let monthlyBronzePrice = 39.99;
let annualBronzePrice = 479.88;

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

//add can event listener to the toggle element
toggleEl.addEventListener('change', (e) => {
  if (!e.target.checked) {
    //monthly is selected
    annualBronzePrice = 479.88; //reset the annual price
    prices.forEach((el) => {
      el.innerHTML = `$${monthlyBronzePrice.toFixed(2)}`;
      monthlyBronzePrice += 20;
    });

    frequency.forEach((el) => {
      el.innerHTML = `1 Delivery per Month`;
    });
  } else {
    //annually is selected
    monthlyBronzePrice = 39.99; //reset the monthly price
    prices.forEach((el) => {
      el.innerHTML = `$${annualBronzePrice.toFixed(2)}`;
      annualBronzePrice += 240;
    });

    frequency.forEach((el) => {
      el.innerHTML = `12 Deliveries per Year`;
    });
  }
});
