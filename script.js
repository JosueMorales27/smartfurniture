// Selecting the necessary elements
const navToggle = document.querySelector('.nav__toggle');
const navResponsive = document.querySelector('.nav__responsive');

// Adding a click event listener to the nav toggle button
navToggle.addEventListener('click', function() {
  // Toggling the show class on the nav responsive element
  navResponsive.classList.toggle('show-menu');
});

// Selecting all buy buttons
const buyButtons = document.querySelectorAll('.buy-button');

// Adding a click event listener to each buy button
buyButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Getting the product name from the data-product attribute
    const productName = this.getAttribute('data-product');
    // Alerting the user with the selected product name
    alert(`You have selected ${productName}`);
  });
});